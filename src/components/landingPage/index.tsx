import { Carousel } from "./Carousel"
import { CustomerTestimonials } from "./CustomerTestimonials"
import { DownloadApp } from "./DownloadApp"
import { FrequentlyAskedQuestions } from "./FrequentlyAskedQuestions"
import { KeepingTrack } from "./KeepingTrack"
import { MskSimplified } from "./MskSimplified"
import { OurNumbers } from "./OurNumbers"
import { PricingPage } from "./PricingPage"
import { SomeFeatures } from "./SomeFeatures"


export const LandingPage = () => {
  return (
    <div>
        <Carousel />
        <OurNumbers />
        <SomeFeatures />
        <MskSimplified />
        <KeepingTrack />
        <PricingPage />
        <CustomerTestimonials />
        <DownloadApp />
        <FrequentlyAskedQuestions />
    </div>
  )
}
