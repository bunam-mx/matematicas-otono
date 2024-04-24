import HeaderBlock from "../Components/HeaderBlock/HeaderBlock"
import HeroBlock from "../Components/HeroBlock/HeroBlock"
import ScheduleBlock from "../Components/ScheduleBlock/ScheduleBlock"

function App() {

  return (
    <>
      <HeaderBlock />
      <HeroBlock />
      <ScheduleBlock />
      <img src="/images/hoja.png" alt="Hoja otoño" width={400} className="fixed right-0 bottom-0 -z-10" />
    </>
  )
}

export default App
