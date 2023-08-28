import { Footer } from "../shared/Footer"
import { Navbar_two } from "../shared/Navbar_two"
import { TutorialHead } from "./TutorialHead"
import { Videotutorials } from "./Videotutorials"


export const Tutorialindex = () => {
  return (
    <div>
      <Navbar_two />
      <TutorialHead />
      <Videotutorials />
      <Footer />
    </div>
  )
}
