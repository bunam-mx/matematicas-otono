import Cookies from "universal-cookie";

function Logout() {
  const cookies = new Cookies();

  cookies.remove("id", { path: '/' });
  window.location.href = "/mate-otono-2024/";
}

export default Logout;
