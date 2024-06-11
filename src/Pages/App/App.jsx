import { useRoutes, BrowserRouter } from "react-router-dom";
import HeaderBlock from "../../Components/HeaderBlock/HeaderBlock"
import FooterBlock from "../../Components/FooterBlock/FooterBlock"
import Home from "../Home/Home"

const AppRoutes = () => {
  return useRoutes([
    { path: "/mate-otono-2024/", element: <Home /> }
  ]);
};

function App() {

  return (
    <BrowserRouter>
      <HeaderBlock />
      <AppRoutes />
      <FooterBlock />
      <img src="images/hoja.png" alt="Hoja otoño" width={400} className="fixed right-0 bottom-0 -z-10" />
    </BrowserRouter>
  )
}

export default App
