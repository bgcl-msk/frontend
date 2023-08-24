import { Input } from "../shared/Input"


export const GetInTouch = () => {
  return (
    <div className="p-6">
        <div className="flex flex-col justify-center items-center p-4 mb-4">
        <h1 className="text-3xl text-blue_color font-bold text-center mb-2">GET IN TOUCH</h1>
        <span className="w-[140px] h-1 bg-blue_color border"></span>
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <form>
          <Input placeholder="Name" type="text" name="name" required />
          <Input placeholder="Email" type="email" name="email" required />
          <Input placeholder="Message" type="text" name="message" required style={{height:"100px", paddingBottom:"69px",}} />
          <button className="w-[350px] h-[40px] mb-4 bg-blue_color text-white cursor-pointer font-bold">SUBMIT</button>
            </form>
          </div>
          <div className="h-[2px] w-[200px] p-0 m-0 rotate-90 bg-blue_color"></div>
            <div>
                <div className="text-blue_color  mb-4">
                <p className="font-bold">Phone</p>
                <p>+2335484338</p>
                </div>
                <div className="text-blue_color  mb-4">
                <p className="font-bold">Email</p>
                <p>info@mystorekeeper.com</p>
                </div>
                <div className="text-blue_color  mb-4">
                <p className="font-bold">Address</p>
                <p>Accra</p>
                </div>
            </div>
        </div>
    </div>
  )
}
