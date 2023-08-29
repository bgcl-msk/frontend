import { Link } from "react-router-dom"
import { msk_logo } from "../../assets"
import { signup } from "../../assets/login-images"
import { Input } from "../shared/Input"
import { SetStateAction, useState } from "react"

export const SignUpindex = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedGender(event.target.value);
  };

  return (
<>
<div className="w-full border h-screen md:h-[965px] flex justify-center items-center md:pl-32">
        <div className="hidden md:block">
          <img src={signup} className="w-[500px]"></img>
        </div>
        <div className="flex-1 p-2 bg-login_bg h-full w-full">
          <div className="flex flex-col justify-center items-center h-full">
            <img src={msk_logo} className="w-[70px] mb-[20px]"></img>
            <h1 className="text-2xl font-semibold text-blue_color mb-[30px]">Personal Details</h1>
            
            <div className="w-[350px] md:w-[450px]">
            <Input style={{width:"100%"}} placeholder="Full Name" type="text"   required/>
            <Input style={{width:"100%"}} placeholder="Date of Birth" type="date" required/>
            <div className="w-[100%] p-4 border-2 border-blue_color mb-5 ">
                <label htmlFor="gender">Gender: </label>
                <select id="gender" value={selectedGender} onChange={handleGenderChange} className="bg-transparent">
                  <option value="" disabled>Select...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {/* {selectedGender && (
                  <p>You have selected: {selectedGender === 'male' ? 'Male' : 'Female'}</p>
                )} */}
              </div>
            </div>

            <div className="md:text-left w-[350px] md:w-[450px] cursor-pointer">
            <small><i>By signing up, You are agree to our <u className="text-blue-700">Terms & Conditions</u></i></small><br></br>
            </div>
            <div className="flex  justify-end mt-6 w-[350px] md:w-[450px]">
              <Link to='/signup-next'><button className="bg-blue_color text-white px-8 py-3 rounded-md flex">Next</button></Link>
            </div>
            <div className="text-right w-[350px] md:w-[450px] mt-4">
              <Link to='/login'><small className="text-blue-700"><i>Already a member? Go to <u>Login</u></i></small></Link>
            </div>
            </div> 
          <div>
          </div>
          </div>
    </div>
</>
  )
}
