import { FrequentlyAskedQuestions } from "../landingPage/FrequentlyAskedQuestions"
import { Footer } from "../shared/Footer"
import { Navbar_two } from "../shared/Navbar_two"

export const FAQindex = () => {
  return (
    <div>
        <Navbar_two />
        <FrequentlyAskedQuestions />
        <Footer />
    </div>
  )
}
