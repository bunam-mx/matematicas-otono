import "./RegisterForm.css";

const API_URL = import.meta.env.VITE_API_URL;
const privacyNotice =
  "https://lib.cuaed.unam.mx/portales/aviso-privacidad-simplificado.html";

function RegisterBlock(props) {
  const displayRegisterMessage = (message) => {
    let registerMessage = document.getElementById("registerMessage");
    registerMessage.getElementsByTagName("p")[0].textContent = "";
    registerMessage.getElementsByTagName("p")[0].textContent = message;
    registerMessage.classList.remove("hidden");
    setTimeout(() => {
      registerMessage.classList.add("hidden");
    }, 5000);
  };

  const sendRegister = (event) => {
    event.preventDefault();
    window.scroll(0, 0);

    const emailTag = document.getElementById("email");
    const confirmEmailTag = document.getElementById("confirm_email");
    const passwordTag = document.getElementById("password");
    const confirmPasswordTag = document.getElementById("confirm_password");
    const nameTag = document.getElementById("name");
    const lastnameTag = document.getElementById("lastname");
    const entityTag = document.getElementById("entity");
    const curpTag = document.getElementById("curp");
    const studyLevelTag = document.getElementById("studyLevel");

    if (emailTag.value !== confirmEmailTag.value) {
      displayRegisterMessage("Los correos no coinciden");
      return;
    }
    if (passwordTag.value !== confirmPasswordTag.value) {
      displayRegisterMessage("Las contraseñas no coinciden");
      return;
    }

    let formData = {
      email: emailTag.value,
      password: passwordTag.value,
      name: nameTag.value,
      lastname: lastnameTag.value,
      entity: entityTag.value,
      curp: curpTag.value,
      account: false,
      studyLevel: studyLevelTag.value,
      usertype: props.usertype,
    };

    let dataJSON = JSON.stringify(formData);

    let options = {
      method: "POST",
      body: dataJSON,
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${API_URL}/users/`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          displayRegisterMessage(data.error);
          return;
        }
        let successMessage = document.getElementById("successMessage");
        successMessage.classList.remove("hidden");
        setTimeout(() => {
          successMessage.classList.add("hidden");
          window.location.href = "/mate-otono-2024/";
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        displayRegisterMessage(
          "Ocurrió un error inesperado. Intente más tarde."
        );
      });
  };

  return (
    <section className="register-form">
      <div id="registerMessage" className="register-form__message hidden">
        <div>
          <span>x</span>
          <p>Message</p>
        </div>
      </div>
      <header>
        <p className="mt-2 text-gray-600">
          Para conocer el manejo de los datos que se solicitan en este registro
          se puede consultar el{" "}
          <a
            href={privacyNotice}
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Aviso de privacidad simplificado de la Coordinación de Universidad
            Abierta y Educación Digital
          </a>{" "}
          de la UNAM.
        </p>
      </header>
      <main className="w-3/4 mx-auto bg-slate-50 rounded shadow-sm">
        <div
          className="register-form__success-message hidden"
          id="successMessage"
        >
          <p className="p-4 text-center">
            Registro exitoso. <strong>Revisa tu correo electrónico</strong> para
            activar tu cuenta.
          </p>
        </div>
        <form
          action=""
          method="POST"
          onSubmit={sendRegister}
          autoComplete="off"
          className="register-form__form"
        >
          <div className="register-form__form--group">
            <div className="register-form__form--group-item">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                type="email"
                className="w-full"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="register-form__form--group-item">
              <label htmlFor="confirm_email">Confirmar correo electrónico *</label>
              <input
                type="email"
                className="w-full"
                name="confirm_email"
                id="confirm_email"
                required
              />
            </div>
          </div>
          <div className="register-form__form--group">
            <div className="register-form__form--group-item">
              <label htmlFor="">Contraseña *</label>
              <input
                type="password"
                className="w-full"
                name="password"
                id="password"
                required
              />
            </div>
            <div className="register-form__form--group-item">
              <label htmlFor="">Confirmar contraseña *</label>
              <input
                type="password"
                className="w-full"
                name="confirm_password"
                id="confirm_password"
                required
              />
            </div>
          </div>
          <div className="register-form__form--group">
            <div className="register-form__form--group-item">
              <label htmlFor="">
                Nombre * (como desea que aparezca en su constancia)
              </label>
              <input
                type="text"
                className="w-full"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="register-form__form--group-item">
              <label htmlFor="">
                Apellidos * (como desea que aparezca en su constancia)
              </label>
              <input
                type="text"
                className="w-full"
                name="lastname"
                id="lastname"
                required
              />
            </div>
          </div>
          <div className="register-form__form--group">
            <div className="register-form__form--group-item">
              <label htmlFor="">Entidad educativa</label>
              <input
                type="text"
                className="w-full"
                name="entity"
                id="entity"
              />
            </div>
          </div>
          <div className="register-form__form--group">
            <div className="register-form__form--group-item">
              <label htmlFor="">CURP *</label>
              <input
                type="text"
                className="w-full"
                name="curp"
                id="curp"
                required
                minLength="18"
                maxLength="18"
              />
              <p className="text-sm text-red-800">
                Favor de verificar, si está incorrecta, no se emitirá constancia
              </p>
            </div>
            <div className="register-form__form--group-item">
              <label htmlFor="">Grado máximo de estudios</label>
              <select
                name="studyLevel"
                className="w-full"
                id="studyLevel"
              >
                <option value="">Seleccione una opción</option>
                <option value="Secundaria">Secundaria</option>
                <option value="Bachillerato">Bachillerato</option>
                <option value="Licenciatura">Licenciatura</option>
                <option value="Maestría">Maestría</option>
                <option value="Doctorado">Doctorado</option>
              </select>
            </div>
          </div>
          <div className="register-form__form--notice">
            <div className="register-form__form--group-item">
              <label htmlFor="">
                <a
                  href={privacyNotice}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 underline"
                >
                  Aviso de privacidad simplificado de la Coordinación de
                  Universidad Abierta y Educación Digital
                </a>{" "}
                de la UNAM. *
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="privacyAccept"
                  value="privacy"
                  id="privacy"
                  required
                />{" "}
                He leído el Aviso de Privacidad
              </label>
            </div>
          </div>
          <div className="register-form__form--submit">
            <p>* Campos obligatorios</p>
            <input type="submit" value="completar registro" />
          </div>
        </form>
      </main>
    </section>
  );
}

export default RegisterBlock;
