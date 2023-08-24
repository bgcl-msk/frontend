import { contact } from "../../assets"
import { Input } from "../shared/Input"


export const ContactPage = () => {
  return (
    <div className="pt-[8rem]">
        <h1 className="text-center text-3xl text-blue_color font-bold mb-6">ContactPage</h1>
        <p className="text-center text-lg text-blue_color font-bold mb-6">Any questions or remarks? Just write to us a message!</p>

        <div className="flex justify-center  m-auto items-center bg-navbar_bg h-fit">
          <div className="hidden md:block">
            <img src={contact} width="350px"/>
          </div>
          <div className="mb-3 px-5 text-right">
            <form>
              <div className="md:flex text-left">
                <div className="mr-4">
                  <small>First Name</small>
                  <Input type="text" required />
                </div>
                <div>
                  <small>Last Name</small>
                  <Input type="text" required />
                </div>
              </div>
              <div className="md:flex text-left">
                <div className="mr-4">
                  <small>Email</small>
                  <Input type="email" required />
                </div>
                <div>
                  <small>Phone Number</small>
                  <Input type="tel" required />
                </div>
              </div>
              <div className="text-left">
                <label>Message</label>
                <Input style={{width:"100%", height:"200px"}}/>
              </div>
              <button className="p-3 text-center bg-blue_color text-white">Send Message</button>
            </form>
          </div>
        </div>
    </div>
  )
}
