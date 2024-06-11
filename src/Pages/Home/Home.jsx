import HeroBlock from "../../Components/Home/HeroBlock/HeroBlock"
import CallToRegisterBlock from "../../Components/Home/CallToRegisterBlock/CallToRegisterBlock"
import ScheduleBlock from "../../Components/Home/ScheduleBlock/ScheduleBlock"
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <HeroBlock />
      <CallToRegisterBlock />
      <ScheduleBlock />
    </div>
  );
}

export default Home;
