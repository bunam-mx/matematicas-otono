import HeroBlock from "../../Components/Home/HeroBlock/HeroBlock"
import ScheduleBlock from "../../Components/Home/ScheduleBlock/ScheduleBlock"
import Modal from "../../Components/Home/ScheduleBlock/Modal"
import "./Home.css";
import { useState } from "react";

function Home() {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  return (
    <div className="home-container">
      <HeroBlock />
      <ScheduleBlock />
      <Modal 
        estado = {estadoModal}
        cambiarEstado = {cambiarEstadoModal}
      >
        <p>Contenido del modal</p>
        <p>ponente</p>
      </Modal>
    </div>
  );
}

export default Home;
