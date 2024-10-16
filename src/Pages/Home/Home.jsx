import HeroBlock from "../../Components/Home/HeroBlock/HeroBlock"
import ScheduleBlock from "../../Components/Home/ScheduleBlock/ScheduleBlock"
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <HeroBlock />
      <ScheduleBlock />
    </div>
  );
}

export default Home;
