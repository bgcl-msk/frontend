import { Link } from "react-router-dom"
import { login_icon, msk_logo } from "../../assets"
import { login } from "../../assets/login-images"
import { Input } from "../shared/Input"


export const Loginindex = () => {
  return (
    <div className="w-full border h-[965px] flex justify-between items-center pl-32">
        <div>
          <img src={login} className="w-[500px]"></img>
        </div>
        <div className="flex-1 p-2 bg-login_bg h-full w-full">
          <div className="flex flex-col justify-center items-center h-full">
            <img src={msk_logo} className="w-[70px] mb-[20px]"></img>
            <h1 className="text-2xl font-semibold text-blue_color mb-[30px]">Log in</h1>
            
            <div className="w-[450px]">
            <Input style={{width:"100%"}} placeholder="Contact/Email" type="text"   required/>
            <Input style={{width:"100%"}} placeholder="Password" type="password" required/>
            </div>

            <div className="text-left w-[450px] cursor-pointer">
            <Link to="/forgotpassword"><small><i><u>Forgot Password?</u></i></small></Link><br></br>
            <Link to='/signup'><small><i> Sign Up</i></small></Link>
            </div>
            <div className="flex justify-end mt-6 w-[450px]">
              <button className="bg-blue_color text-white px-8 py-3 rounded-md flex"><img src={login_icon} className="mr-2"></img>Sign In</button>
            </div>
            </div> 
          <div>
          </div>
          </div>
    </div>
  )
}
