import Cookies from "universal-cookie";
import "./Profile.css";

const API_URL = import.meta.env.VITE_API_URL;
const cookies = new Cookies();



const assistantContent = () => {
  return (
    <article className="profile-container__content-assistant">
      <p>Una vez que se encuentre el programa completo aquí podrás registrar tu asistencia.</p>
    </article>
  );
};

function Profile() {
  const submitWorkshop = (e) => {
    e.preventDefault();
    
    let messageElement = document.getElementById("speaker-message");

    let formElement = document.getElementById("speaker-data");
    let formData = new FormData(formElement);

    let options = {
      method: "POST",
      body: formData
    }

    fetch(`${API_URL}/workshops`, options)
    .then((response) => response.json())
    .then((data) => {
      if(data.message) {
        console.log(data);
        const errorMessage = document.getElementById("error-message");
        errorMessage.getElementsByTagName("p")[0].textContent = data.title;
        errorMessage.classList.remove("hidden");
        setTimeout(() => {
          errorMessage.classList.add("hidden");
        }, 5000);
      } else {
        const successMessage = document.getElementById("success-message");
        successMessage.getElementsByTagName("p")[0].textContent = `Hemos recibido tu ponencia "${data.title}". En cuanto sea evaluada te enviaremos un correo con la confirmación.`;
        successMessage.classList.remove("hidden");
        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 5000);
      }
    });
  }

  const speakerContent = () => {
    return (
      <article className="profile-container__content-speaker">
        <h3>Registra tu ponencia</h3>
        <p className="profile-container__guidelines"><a href={`${import.meta.env.BASE_URL}docs/lineamientos.pdf`} download="lineamientos.pdf">Lineamientos para la elaboración de ponencias</a></p>
        <div className="profile-container__success-message hidden" id="success-message">
          <p></p>
        </div>
        <div className="profile-container__error-message hidden" id="error-message">
          <p></p>
        </div>
        <form onSubmit={(e) => submitWorkshop(e)} id="speaker-data" encType="multipart/form-data">
          <input type="hidden" name="userid" value={cookies.get("id")} />
          <div className="speaker-data--item">
            <label htmlFor="title">Título</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div className="speaker-data--item">
            <label htmlFor="manuscript">Ponencia</label>
            <input type="file" name="manuscript" required id="manuscript" />
          </div>
          <div className="speaker-data--item">
            <label htmlFor="bio">Semblanza</label>
            <input type="file" name="bio" required id="bio" />
          </div>
          <div className="speaker-data--item-submit">
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </article>
    );
  };

  return (
    <section className="profile-container">
      <header className="profile-container__header">
        <p><a>Cerrar sesión</a></p>
      </header>
      {cookies.get("usertype") == 2 ? speakerContent() : ""}
      {assistantContent()}
    </section>
  );
}

export default Profile;
