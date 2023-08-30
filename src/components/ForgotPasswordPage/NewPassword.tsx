import { Link } from "react-router-dom"
import { msk_logo } from "../../assets"
import { ellipse1, ellipse2, ellipse3, ellipse4, ellipse5, ellipse6, newpassword } from "../../assets/login-images"
import { Passwordinput } from "../shared/passwordinput"


export const NewPassword = () => {
  return (
    <div className="w-full border h-screen md:h-[965px] flex justify-center items-center md:pl-32">
        <div className="hidden md:block">
          <img src={newpassword} className="w-[500px]"></img>
        </div>
        <div className="flex-1 p-2 bg-login_bg h-full w-full relative">
        <div className="absolute "><img src={ellipse1}></img></div>
        <div className="absolute top-[69%] left-[20%]"><img src={ellipse2}></img></div>
        <div className="absolute top-[38%] "><img src={ellipse3}></img></div>
        <div className="absolute right-0 bottom-[16%]"><img src={ellipse4}></img></div>
        <div className="absolute right-0"><img src={ellipse5}></img></div>
        <div className="absolute bottom-0"><img src={ellipse6} width={"400px"}></img></div>
          <div className="flex flex-col justify-center items-center h-full">
            <img src={msk_logo} className="w-[70px] mb-[20px]"></img>
            <h1 className="text-2xl font-semibold text-blue_color mb-[30px]">New Password</h1>
            
            <div className="w-[350px] md:w-[450px]">
            <Passwordinput placeholder="New Password" />
            <Passwordinput placeholder="Confirm New Password" />
             </div>

            <div className="flex justify-between mt-6 w-[350px] md:w-[450px]">
            <div className="rounded-[50%] w-[45px] h-[45px] bg-blue_color text-white flex justify-center items-center cursor-pointer">
             <Link to='/passwordotp'><i className="fa-sharp fa-solid fa-arrow-left"></i> </Link>  
              </div>
             <Link to='/passwordchanged'><button className="bg-blue_color text-white px-8 py-3 rounded-md flex">Next</button></Link> 
            </div>
            </div> 
          <div>
          </div>
          </div>
    </div>
  )
}
