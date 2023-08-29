import { Link } from "react-router-dom"

import { passwordchanged, passwordchanged_success } from "../../assets/login-images"

export const Passwordchanged = () => {
  return (
    <div className="w-full border h-screen md:h-[965px] flex justify-center items-center md:pl-32">
    <div className="hidden md:block" id="">
      <img src={passwordchanged} className="w-[500px] h-fit"></img>
    </div>
    <div className="flex-1 p-2 bg-login_bg h-full">
      <div className="flex flex-col justify-center items-center h-full">
        <img src={passwordchanged_success} className="w-[230px]"></img>
        <h1 className="text-2xl font-semibold text-blue_color mt-[-40px]"> Password Changed!</h1>
        <p className="text-xl text-blue_color">You can now Login to your account.</p>
        <div className="mt-[30px]">
        <Link to='/login'><button className="bg-blue_color text-white px-8 py-3 rounded-md flex">Login</button></Link>
        </div>
        </div> 
      <div>
      </div>
      </div>
</div>
  )
}
