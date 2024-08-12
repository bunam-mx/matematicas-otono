import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Activate.css";

const API_URL = import.meta.env.VITE_API_URL;

const unsuccessMessage = () => {
  return (
  <div className="unsuccess-message">
    <h2 className="text-2xl mb-12">La cuenta no ha sido activada</h2>
    <p>El enlace de activación es incorrecto o ya ha sido utilizado</p>
  </div>
  );
};

const successMessage = (usertype) => {
  return (
    <>
      <div className="success-message">
        <h2 className="text-2xl mb-12">Tu cuenta ha sido activada</h2>
      </div>
      {usertype === 2 ? (
        <p>
          Ahora que tu cuenta se encuentra activa puedes registrar tu ponencia.
        </p>
      ) : (
        "&nbsp;"
      )}
      <p>
        Para continuar{" "}
        <a className="trigger-login" onClick={triggerLogin}>
          inicia sesión
        </a>
      </p>
      <p>
        También puedes{" "}
        <NavLink to="/" className="goto-home">
          ir al inicio
        </NavLink>{" "}
        para revisar el programa completo.
      </p>
    </>
  );
};

const triggerLogin = () => {
  const loginButton = document.getElementById("login");
  loginButton.click();
};

function useValidateAccount(userHash) {
  const [jsx, setJsx] = useState(null);

  useEffect(() => {
    if (userHash === undefined) return null;

    fetch(`${API_URL}/users/activate/${userHash}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.active === true) {
          setJsx(data.usertype);
        } else {
          setJsx(0);
        }
      });
  }, [userHash]);

  return jsx;
}

function Activate() {
  const { userHash } = useParams();
  const usertype = useValidateAccount(userHash);
  console.log(`usertype es ${usertype}`);
  return (
    <section className="activate-block">
      <div className="activate-block__content">
        {usertype === 0 ? unsuccessMessage() : successMessage(usertype)}
      </div>
    </section>
  );
}

export default Activate;
