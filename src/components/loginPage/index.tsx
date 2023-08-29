import { Link } from "react-router-dom"
import { login_icon, msk_logo } from "../../assets"
import { login } from "../../assets/login-images"
import { Input } from "../shared/Input"
import { Passwordinput } from "../shared/passwordinput"


export const Loginindex = () => {
  return (
    <div className="w-full border h-screen md:h-[965px] flex justify-between items-center md:pl-32">
        <div className="hidden md:block">
          <img src={login} className="w-[500px]"></img>
        </div>
        <div className="flex-1 p-2 bg-login_bg h-full w-full">
          <div className="flex flex-col justify-center items-center h-full">
          
            <img src={msk_logo} className="w-[70px] mb-[20px]"></img>
            <h1 className="text-2xl font-semibold text-blue_color mb-[30px]">Log in</h1>
            
            <div className="w-[350px] md:w-[450px]">
            <Input style={{width:"100%"}} placeholder="Contact/Email" type="text"   required/>
            <Passwordinput placeholder="Password" />
            </div>

            <div className="text-left w-[350px] md:w-[450px] flex justify-between cursor-pointer text-blue-700">
            <Link to="/forgotpassword"><small><i><u>Forgot Password?</u></i></small></Link><br></br>
            <Link to='/'><small><i>Home</i></small></Link>
            <Link to='/signup'><small><i> Sign Up</i></small></Link>
            </div>
            <div className="flex justify-end mt-6 w-[350px] md:w-[450px]">
            <Link to='/changepassword'><button className="bg-blue_color text-white px-8 py-3 rounded-md flex"><img src={login_icon} className="mr-2"></img>Sign In</button></Link>  
            </div>
            </div> 
          <div>
          </div>
          </div>
    </div>
  )
}
