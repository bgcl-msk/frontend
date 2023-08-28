import { collaborative, continuous, customer, empowering, innovation, missions, reliable, transparent } from "../../assets/about-images"
import { Footer } from "../shared/Footer"
import { Navbar_two } from "../shared/Navbar_two"
import { GetInTouch } from "./GetInTouch"
import { SectionDiv } from "./SectionDiv"
import { SectionImg } from "./SectionImg"
import 'animate.css'

export const AboutIndex = () => {
  return (
    <>
    <Navbar_two />
    <div className="w-[full] h-[fit] text-center">
        <h1 className="text-3xl font-bold p-2">About</h1>

        <div className="flex p-5 shadow-md md:shadow-none">
            <SectionDiv title={"Mission"} words={"Our mission is to provide a centralized place for organizations ranging from smaller to larger ones to efficiently manage their businesses without worrying about operational overhead."} />
            <SectionImg image={missions} className="hidden md:block w-[600px] mr-[200px] animate__animated animate__bounceIn"/>
        </div>
        <div className="flex p-5 shadow-md md:shadow-none">
            <SectionImg image={reliable} className="hidden md:block w-[600px] ml-[200px] animate__animated animate__bounceIn"/>
            <SectionDiv title={"Reliable Support"} words={"We stand by our clients every step of the way. Our responsive customer support ensures that our clients have a reliable partner to assist them whenever they need assistance or guidance."} />
        </div>
        <div className="flex p-5 shadow-md md:shadow-none">
            <SectionDiv title={"Continuous Learning"} words={"We are on a journey of continuous learning and improvement. We actively seek feedback from our clients and use it to enhance our system, adapting to evolving business needs."} />
            <SectionImg image={continuous} className="hidden md:block w-[600px] mr-[200px] animate__animated animate__bounceIn"/>
        </div>
        <div className="flex p-5 shadow-md md:shadow-none">
            <SectionImg image={customer} className="hidden md:block w-[600px] ml-[200px] animate__animated animate__bounceIn"/>
            <SectionDiv title={"Customer-Centric Excellence"} words={"We prioritize the needs and satisfaction of our customers above all else. Our shop management system is designed with the user experience in mind, ensuring efficiency, convenience, and a seamless shopping process."} />
        </div>
        <div className="flex p-5 shadow-md md:shadow-none">
            <SectionDiv title={"Innovation in Simplification"} words={"We continuously explore innovative ways to simplify shop management for our clients. Our platform leverages cutting-edge technology to streamline inventory management, sales tracking, and customer interactions."} />
            <SectionImg image={innovation} className="hidden md:block w-[600px] mr-[200px] animate__animated animate__bounceIn"/>
        </div>
        <div className="flex p-5 shadow-md md:shadow-none">
            <SectionImg image={transparent} className="hidden md:block w-[600px] ml-[200px] animate__animated animate__bounceIn"/>
            <SectionDiv title={"Transparent Integrity"} words={"We conduct business with utmost honesty and transparency.Our commitment to integrity means that our customers can trust us to provide accurate data, fair pricing, and reliable support."} />
        </div>
        <div className="flex p-5 shadow-md md:shadow-none">
            <SectionDiv title={"Collaborative Growth"} words={"We believe in the power of collaboration. We work closely with our clients to understand their unique needs and adapt to our system to help their businesses flourish."} />
            <SectionImg image={collaborative} className="hidden md:block w-[600px] mr-[200px] animate__animated animate__bounceIn"/>
        </div>
        <div className="flex p-5 shadow-md md:shadow-none">
            <SectionImg image={empowering} className="hidden md:block w-[600px] ml-[200px] animate__animated animate__bounceIn"/>
            <SectionDiv title={"Empowering Knowledge"} words={"We empower shop owners with knowledge. Our system provides insights and analytics that enable data-driven decision-making, helping our clients make informed choices to drive success."} />
        </div>
    </div>
    <GetInTouch /> 
    <Footer />
    </>
  )
}
