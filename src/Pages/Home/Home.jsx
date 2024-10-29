import HeroBlock from "../../Components/Home/HeroBlock/HeroBlock";
import ScheduleBlock from "../../Components/Home/ScheduleBlock/ScheduleBlock";
import "./Home.css";
import { SemblanzaProvider } from "../../Context";

function Home() {
  return (
    <div className="home-container">
      <HeroBlock />
      <SemblanzaProvider>
        <ScheduleBlock />
      </SemblanzaProvider>
      <article className="committee">
        <h2>Comité organizador</h2>
        <dl>
          <dt>Dr. Manuel Jesús Falconi Magaña</dt>
          <dd>Facultad de Ciencias</dd>
          <dt>Dra. Guadalupe Vadillo</dt>
          <dd>Bachillerato a distancia B@UNAM</dd>
          <dt>Dra. Leticia Sánchez López</dt>
          <dd>Escuela Nacional Preparatoria ENP</dd>
          <dt>M. en C. José Antonio Gómez Ortega</dt>
          <dd>Facultad de Ciencias</dd>
          <dt>Dra. Giselle Ochoa Hofmann</dt>
          <dd>Escuela Nacional Preparatoria ENP</dd>
        </dl>
        <dl>
          <dt>Mtra. Rosario Santillán</dt>
          <dd>Escuela Nacional Preparatoria ENP</dd>
          <dt>Mtro. Gabriel Gutiérrez</dt>
          <dd>Escuela Nacional Preparatoria ENP</dd>
          <dt>Mtra. Adriana Gómez Reyes</dt>
          <dd>Colegio de Ciencias y Humanidades CCH</dd>
          <dt>M. en C. Carmen Rocío Vite González</dt>
          <dd>Escuela Nacional Preparatoria</dd>
          <dt>Mtra. Clara Elena Vidrio Amor</dt>
          <dd>Facultad de Ciencias</dd>
        </dl>
      </article>
    </div>
  );
}

export default Home;
