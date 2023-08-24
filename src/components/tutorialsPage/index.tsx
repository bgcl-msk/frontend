import { Footer } from "../shared/Footer"
import { Navbar } from "../shared/Navbar"
import { TutorialHead } from "./TutorialHead"
import { Videotutorials } from "./Videotutorials"


export const Tutorialindex = () => {
  return (
    <div>
      <Navbar />
      <TutorialHead />
      <Videotutorials />
      <Footer />
    </div>
  )
}
