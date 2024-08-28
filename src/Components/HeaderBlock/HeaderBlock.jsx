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

const displayRecoveryMessage = (message) => {
  let loginMessage = document.getElementById("loginform-success");
  loginMessage.getElementsByTagName("p")[0].textContent = "";
  loginMessage.getElementsByTagName("p")[0].textContent = message;
  loginMessage.classList.remove("hidden");
  setTimeout(() => {
    loginMessage.classList.add("hidden");
  }, 5000);
};

const displayLoginForm = () => {
  let loginForm = document.getElementById("login-form");
  let recoveryForm = document.getElementById("recovery-form");
  let registerAssistants = document.getElementById("register-assistants");

  if (loginForm.classList.contains("hidden")) {
    loginForm.classList.remove("hidden");
    recoveryForm.classList.add("hidden");
    registerAssistants.classList.add("hidden");
  } else {
    loginForm.classList.add("hidden");
    registerAssistants.classList.remove("hidden");
  }
}

const displayRecoveryForm = () => {
  let loginForm = document.getElementById("login-form");
  let recoveryForm = document.getElementById("recovery-form");
  let registerAssistants = document.getElementById("register-assistants");

  if (recoveryForm.classList.contains("hidden")) {
    recoveryForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    registerAssistants.classList.add("hidden");
  } else {
    recoveryForm.classList.add("hidden");
    registerAssistants.classList.remove("hidden");
  }
}

const displayAssistants = () => {
  let registerAssistants = document.getElementById("register-assistants");
  let loginForm = document.getElementById("login-form");
  let recoveryForm = document.getElementById("recovery-form");

  if (registerAssistants.classList.contains("hidden")) {
    registerAssistants.classList.remove("hidden");
    loginForm.classList.add("hidden");
    recoveryForm.classList.add("hidden");
  } else {
    registerAssistants.classList.add("hidden");
  }
}

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

const send_recoverypassword = (event) => {
  event.preventDefault();
  const emailTag = document.getElementById("email_login");

  let formData = {
    email: emailTag.value,
  };

  let dataJSON = JSON.stringify(formData);

  let options = {
    method: "POST",
    body: dataJSON,
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${API_URL}/users/recoverypassword/`, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        displayLoginMessage(data.error);
        return;
      }
      displayRecoveryMessage("Se ha enviado un correo con las instrucciones para recuperar tu contraseña.");
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
      <div id="loginform-success" className="hidden">
        <p>Aquí va el mensaje</p>
      </div>
      <div className="start-session">
        {cookies.get("id") !== undefined ? (
          <div className="start-session__userdata">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/profile">{`${cookies.get("name")} ${cookies.get(
              "lastname"
            )}`}</NavLink>
          </div>
        ) : (
          <div className="display-login">
            <form onSubmit={sendLogin} id="login-form" className="hidden">
              <div>
              <input
                type="email"
                id="email_login"
                placeholder="Correo electrónico"
                required
              ></input>
              <input
                type="password"
                id="password_login"
                placeholder="Contraseña"
                required
              ></input>
              </div>
              <div>
              <input type="submit" value="Iniciar sesión"></input>
              <a href="#" className="login-form__password-recovery" onClick={displayRecoveryForm}>Recuperar contraseña</a>
              </div>
              <a href="#" className="abort" onClick={displayAssistants}>x</a>
            </form>
            <form id="recovery-form" onSubmit={send_recoverypassword} className="hidden">
              <div>
              <input
                type="email"
                id="email_login"
                placeholder="Correo electrónico"
                required
              ></input>
              </div>
              <div>
              <input type="submit" value="Recuperar contraseña"></input>
              </div>
              <a href="#" className="abort" onClick={displayLoginForm}>x</a>
            </form>
            <div className="register-assistants" id="register-assistants">
              <NavLink
                to="/register/assistant/"
                className="register-assistants__register"
              >
                Registrarse
              </NavLink>
              <a href="#" className="register-assistants__login" onClick={displayLoginForm}>
                Iniciar sesión
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderBlock;
