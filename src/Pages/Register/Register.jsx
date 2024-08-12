import { useParams } from "react-router-dom";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import "./Register.css";

function Register() {
  const { usertype } = useParams();
  const usertypeInteger = usertype === "assistant" ? 1 : 2;
  const userTypeLabel = usertype === "assistant" ? "asistente" : "ponente";

  return (
    <div className="register-container">
      <h2>Registro de {userTypeLabel}</h2>
      <RegisterForm usertype={usertypeInteger} />
    </div>
  );
}

export default Register;
