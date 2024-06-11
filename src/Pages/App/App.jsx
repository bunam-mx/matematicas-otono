import { useRoutes, BrowserRouter } from "react-router-dom";
import HeaderBlock from "../../Components/HeaderBlock/HeaderBlock"
import FooterBlock from "../../Components/FooterBlock/FooterBlock"
import Home from "../Home/Home"
import Register from "../Register/Register"

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/register/:usertype", element: <Register /> },
  ]);
};

function App() {

  return (
    <BrowserRouter basename="/mate-otono-2024/">
      <HeaderBlock />
      <AppRoutes />
      <FooterBlock />
    </BrowserRouter>
  )
}

export default App
