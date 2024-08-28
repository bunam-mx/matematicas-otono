import { useParams } from "react-router-dom";
import "./Recovery.css";

const API_URL = import.meta.env.VITE_API_URL;

const displayRecoveryError = (message) => {
  let recoveryError = document.querySelector(".recovery-error");
  recoveryError.textContent = "";
  recoveryError.textContent = message;
  recoveryError.classList.remove("hidden");
  setTimeout(() => {
    recoveryError.classList.add("hidden");
  }, 5000);
}

const displayRecoverySuccess = (message) => {
  let recoverySuccess = document.querySelector(".recovery-success");
  recoverySuccess.textContent = "";
  recoverySuccess.textContent = message;
  recoverySuccess.classList.remove("hidden");
  setTimeout(() => {
    recoverySuccess.classList.add("hidden");
    window.location.href = "/mate-otono-2024/";
  }, 5000);
}

const changePassword = (event) => {
  event.preventDefault();

  if(document.getElementById("password").value !== document.getElementById("repassword").value) {
    displayRecoveryError("Las contraseñas no coinciden");
    return;
  } else {
    let formData = new FormData(event.target);
    console.log(formData);
    fetch(`${API_URL}/users/changepassword`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          displayRecoveryError(data.error);
        } else {
          displayRecoverySuccess("Tu contraseña ha sido cambiada exitosamente");
        }
      });
  }
}

function Activate() {
  const { userHash } = useParams();
  console.log(`userHash es ${userHash}`);
  return (
    <section className="recovery-block">
      <div className="recovery-block__container">
        <h2>Cambio de contraseña</h2>
        <div className="recovery-error hidden"></div>
        <div className="recovery-success hidden"></div>
        <form onSubmit={changePassword}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Nueva contraseña"
            required
          ></input>
          <input
            type="password"
            id="repassword"
            placeholder="Vuelve a escribir la contraseña"
            required
          ></input>
          <input type="hidden" name="userhash" value={userHash} />
          <div>
            <input type="submit" value="Cambiar contraseña" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Activate;
