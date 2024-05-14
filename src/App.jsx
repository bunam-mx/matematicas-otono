import HeaderBlock from "../Components/HeaderBlock/HeaderBlock"
import HeroBlock from "../Components/HeroBlock/HeroBlock"
import ScheduleBlock from "../Components/ScheduleBlock/ScheduleBlock"
import FooterBlock from "../Components/FooterBlock/FooterBlock"

function App() {

  return (
    <>
      <HeaderBlock />
      <a href="docs/lineamientos.pdf" target="_blank" className="bg-autumn-orange hover:bg-autumn-lightorange text-white p-4 text-3xl rounded fixed right-4 top-40">Lineamientos para ponencias</a>
      <HeroBlock />
      <ScheduleBlock />
      <FooterBlock />
      <img src="images/hoja.png" alt="Hoja otoño" width={400} className="fixed right-0 bottom-0 -z-10" />
    </>
  )
}

export default App
