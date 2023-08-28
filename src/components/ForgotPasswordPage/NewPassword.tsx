import { Link } from "react-router-dom"
import { msk_logo } from "../../assets"
import { newpassword } from "../../assets/login-images"
import { Input } from "../shared/Input"


export const NewPassword = () => {
  return (
    <div className="w-full border h-[965px] flex justify-center items-center pl-32">
        <div>
          <img src={newpassword} className="w-[500px]"></img>
        </div>
        <div className="flex-1 p-2 bg-login_bg h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <img src={msk_logo} className="w-[70px] mb-[20px]"></img>
            <h1 className="text-2xl font-semibold text-blue_color mb-[30px]">New Password</h1>
            
            <div className="w-[450px]">
            <Input style={{width:"100%"}} placeholder="New Password" type="password"   required/>
            <Input style={{width:"100%"}} placeholder="Confirm New Password" type="password"   required/>
             </div>

            <div className="flex justify-end mt-6 w-[450px]">
             <Link to='/passwordchanged'><button className="bg-blue_color text-white px-8 py-3 rounded-md flex">Next</button></Link> 
            </div>
            </div> 
          <div>
          </div>
          </div>
    </div>
  )
}
