import HeaderBlock from "../Components/HeaderBlock/HeaderBlock"
import HeroBlock from "../Components/HeroBlock/HeroBlock"

function App() {

  return (
    <>
      <HeaderBlock />
      <HeroBlock />
      <img src="/images/hoja.png" alt="Hoja otoño" width={400} className="fixed right-0 bottom-0 -z-10" />
    </>
  )
}

export default App
