import { Link } from "react-router-dom"
import { msk_logo } from "../../assets"
import { ellipse1, ellipse2, ellipse3, ellipse4, ellipse5, ellipse6, otp, otp_enter } from "../../assets/login-images"
import { Input } from "../shared/Input"


export const PasswordOTP = () => {
  return (
    <div>
         <div className="w-full border h-screen md:h-[965px] flex justify-center items-center md:pl-32">
        <div className="hidden md:block">
          <img src={otp_enter} className="w-[500px]"></img>
        </div>
        <div className="flex-1 p-2 bg-login_bg h-full w-full relative">
        <div className="absolute "><img src={ellipse1}></img></div>
        <div className="hidden md:block absolute top-[69%] left-[20%]"><img src={ellipse2}></img></div>
        <div className="absolute top-[38%] "><img src={ellipse3}></img></div>
        <div className="hidden md:block absolute right-0 bottom-[16%]"><img src={ellipse4}></img></div>
        <div className="absolute right-0 top-28"><img src={ellipse5}></img></div>
        <div className="hidden md:block absolute bottom-0"><img src={ellipse6} width={"400px"}></img></div>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex items-center">
            <img src={msk_logo} className="w-[70px] mb-[20px]"></img>
            <h1 className="text-3xl font-semibold text-blue_color mb-[30px]">Mystorekeeper</h1>
            </div>
            <h1 className="text-4xl font-bold mb-[50px]">OTP CODE</h1>
            <img src={otp} className="mb-4"></img>
            <p className="mb-4 w-[350px] md:w-[400px] text-center">For your two factor authentication, a code has been sent to your email</p>
            <p className="font-bold">( example123@gmail.com )</p>
            <div className="w-[350px] md:w-[450px] mt-5">
            <Input style={{width:"100%", border:"none"}} placeholder="Enter OTP Code" type="text"  required/>
             </div>

            <div className="flex justify-between mt-6 w-[350px] md:w-[450px] ">
            <div className="rounded-[50%] w-[45px] h-[45px] bg-blue_color text-white flex justify-center items-center cursor-pointer">
             <Link to='/forgotpassword'><i className="fa-sharp fa-solid fa-arrow-left"></i> </Link>  
              </div>
             <Link to='/newpassword'><button className="bg-blue_color text-white px-12 py-3 rounded-md flex ">Submit</button></Link> 
            </div>
            </div> 
          <div>
          </div>
          </div>
    </div>
    </div>
  )
}
