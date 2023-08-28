import { Link } from "react-router-dom"
import { msk_logo } from "../../assets"
import { forgotpassword, signup_icon } from "../../assets/login-images"
import { Input } from "../shared/Input"


export const ChangePasswordAfterLogin = () => {
  return (
    <div className="w-full border h-[965px] flex justify-center items-center pl-32">
        <div>
          <img src={forgotpassword} className="w-[500px]"></img>
        </div>
        <div className="flex-1 p-2 bg-login_bg h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <img src={msk_logo} className="w-[70px] mb-[20px]"></img>
            <h1 className="text-2xl font-semibold text-blue_color mb-[30px] text-center">First time logging in, <br></br> change password</h1>
            
            <div className="w-[450px]">
            <Input style={{width:"100%"}} placeholder="Old Password" type="password"   required/>
            <Input style={{width:"100%"}} placeholder="New Password" type="password"   required/>
            <Input style={{width:"100%"}} placeholder="Confirm Password" type="password"   required/>
             </div>

            <div className="flex justify-between mt-6 w-[450px]">
            <div className="rounded-[50%] w-[45px] h-[45px] bg-blue_color text-white flex justify-center items-center cursor-pointer">
             <Link to='/login'><i className="fa-sharp fa-solid fa-arrow-left"></i> </Link>  
              </div>
             <Link to='/passwordotp'><button className="bg-blue_color text-white px-8 py-3 rounded-md flex"><img src={signup_icon} className="mr-2"></img>Confirm</button></Link> 
            </div>
            </div> 
          <div>
          </div>
          </div>
    </div>
  )
}
