import { Link } from "react-router-dom"
import { msk_logo } from "../../assets"
import { signup } from "../../assets/login-images"
import { Input } from "../shared/Input"

export const SignUpindex = () => {
  return (
<>
<div className="w-full border h-[965px] flex justify-center items-center pl-32">
        <div>
          <img src={signup} className="w-[500px]"></img>
        </div>
        <div className="flex-1 p-2 bg-login_bg h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <img src={msk_logo} className="w-[70px] mb-[20px]"></img>
            <h1 className="text-2xl font-semibold text-blue_color mb-[30px]">Personal Details</h1>
            
            <div className="w-[450px]">
            <Input style={{width:"100%"}} placeholder="Full Name" type="text"   required/>
            <Input style={{width:"100%"}} placeholder="Date of Birth" type="date" required/>
            <Input style={{width:"100%"}} placeholder="Gender" type="text" required/>
            </div>

            <div className="text-left w-[450px] cursor-pointer">
            <small><i>By signing up, You are agree to our <u className="text-blue-600">Terms & Conditions</u></i></small><br></br>
            </div>
            <div className="flex  justify-end mt-6 w-[450px]">
              <Link to='/signup-next'><button className="bg-blue_color text-white px-8 py-3 rounded-md flex">Next</button></Link>
            </div>
            <div className="text-right w-[450px] mt-4">
              <Link to='/login'><small><i>Already a member? Go to <u>Login</u></i></small></Link>
            </div>
            </div> 
          <div>
          </div>
          </div>
    </div>
</>
  )
}
