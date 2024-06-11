import { useParams } from "react-router-dom";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

function Register() {
  const { usertype } = useParams();
  const usertypeInteger = usertype === "assistant" ? 1 : 2;

  return (
    <div>
      <h1>Register {usertype}</h1>
      <RegisterForm usertype={usertypeInteger} />
    </div>
  );
}

export default Register;
