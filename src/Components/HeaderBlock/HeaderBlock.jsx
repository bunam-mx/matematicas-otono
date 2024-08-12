import Cookies from "universal-cookie";
import { NavLink } from "react-router-dom";
import "./HeaderBlock.css";

const API_URL = import.meta.env.VITE_API_URL;
const cookies = new Cookies();

const displayLoginMessage = (message) => {
  let loginMessage = document.getElementById("loginform-message");
  loginMessage.getElementsByTagName("p")[0].textContent = "";
  loginMessage.getElementsByTagName("p")[0].textContent = message;
  loginMessage.classList.remove("hidden");
  setTimeout(() => {
    loginMessage.classList.add("hidden");
  }, 5000);
};

const sendLogin = (event) => {
  event.preventDefault();
  const emailTag = document.getElementById("email_login");
  const passwordTag = document.getElementById("password_login");

  let formData = {
    email: emailTag.value,
    password: passwordTag.value,
  };

  let dataJSON = JSON.stringify(formData);

  let options = {
    method: "POST",
    body: dataJSON,
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${API_URL}/users/login/`, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        displayLoginMessage(data.error);
        return;
      }
      cookies.set("id", data.id, { path: "/" });
      cookies.set("name", data.name, { path: "/" });
      cookies.set("lastname", data.lastname, { path: "/" });
      cookies.set("email", data.email, { path: "/" });
      cookies.set("usertype", data.usertype, { path: "/" });
      window.location.href = `${import.meta.env.BASE_URL}profile`;	
    })
    .catch((error) => {
      console.log(error);
      displayLoginMessage("Ocurrió un error inesperado. Intente más tarde.");
    });
};

function HeaderBlock() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <ul>
            <li>
              <a href="https://www.unam.mx/" target="_blank" rel="noreferrer">
                <img
                  src={`${import.meta.env.BASE_URL}images/unam.png`}
                  alt="Universidad Nacional Autónoma de México"
                  width={60}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.fciencias.unam.mx/node/5"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/fac_ciencias.png`}
                  alt="Facultad de Ciencias"
                  width={60}
                />
              </a>
            </li>
            <li>
              <a href="http://enp.unam.mx/" target="_blank" rel="noreferrer">
                <img
                  src={`${import.meta.env.BASE_URL}images/enp.png`}
                  alt="Escuela Nacional Preparatoria"
                  width={60}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.cch.unam.mx/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/cch.png`}
                  alt="Colegio de Ciencias y Humanidades"
                  width={60}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.bunam.unam.mx/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/bunam.png`}
                  alt="Bachillerato a distancia B@UNAM"
                  width={90}
                />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div id="loginform-message" className="hidden">
        <p>Aquí va el mensaje</p>
      </div>
      <div className="start-session">
        {cookies.get("id") !== undefined ? (
          <div className="start-session__userdata">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/profile">{ `${cookies.get("name")} ${cookies.get("lastname")}` }</NavLink>
          </div>
        ) : (
          <div>
            <form onSubmit={sendLogin}>
              <input
                type="email"
                id="email_login"
                placeholder="Correo electrónico"
                required
              ></input>
              <input type="password" id="password_login"  placeholder="Contraseña" required></input>
              <input type="submit" value="Iniciar sesión"></input>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderBlock;
