import HeroBlock from "../../Components/Home/HeroBlock/HeroBlock"
import CallToRegisterBlock from "../../Components/Home/CallToRegisterBlock/CallToRegisterBlock"
import ScheduleBlock from "../../Components/Home/ScheduleBlock/ScheduleBlock"
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <a href="docs/lineamientos.pdf" target="_blank" className="bg-autumn-orange hover:bg-autumn-lightorange text-white p-4 text-3xl rounded fixed right-4 top-40">Lineamientos para ponencias</a>
      <HeroBlock />
      <CallToRegisterBlock />
      <ScheduleBlock />
    </div>
  );
}

export default Home;
