import { Link } from "react-router-dom"
import { login_icon, msk_logo } from "../../assets"
import { ellipse1, ellipse2, ellipse3, ellipse4, ellipse5, ellipse6, login } from "../../assets/login-images"
import { Input } from "../shared/Input"
import { Passwordinput } from "../shared/passwordinput"



export const Loginindex = () => {
  return (
    <div className="w-full border h-screen md:h-[965px] flex justify-between items-center md:pl-32">
        <div className="hidden md:block">
          <img src={login} className="w-[500px]"></img>
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
            <h1 className="text-2xl font-semibold text-blue_color mb-[30px]">Log in</h1>
            
            <div className="w-[350px] md:w-[450px]">
            <Input style={{width:"100%"}} placeholder="Contact/Email" type="text"   required/>
            <Passwordinput placeholder="Password" style={{width:"100%"}}/>
            </div>

            <div className="text-left w-[350px] md:w-[450px] flex justify-between cursor-pointer text-blue-700">
            <Link to="/forgotpassword"><small><i><u>Forgot Password?</u></i></small></Link>
            <div>
            <Link to='/'><small className="mr-3"><i><u>Home</u></i></small></Link>
            <Link to='/signup'><small><i><u>Sign Up</u></i></small></Link>
            </div>
            </div>
            <div className="flex justify-between mt-6 w-[350px] md:w-[450px]">
            <div className="rounded-[50%] w-[45px] h-[45px] bg-blue_color text-white flex justify-center items-center cursor-pointer">
             <Link to='/'><i className="fa-sharp fa-solid fa-arrow-left"></i> </Link>  
              </div>
            <Link to='/changepassword'><button className="bg-blue_color text-white px-8 py-3 rounded-md flex"><img src={login_icon} className="mr-2"></img>Sign In</button></Link>  
            </div>
            </div> 
          <div>
          </div>
          </div>
    </div>
  )
}
