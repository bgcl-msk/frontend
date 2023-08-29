import { useState } from "react";


export const Passwordinput = (props: any) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

  
    
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  return (
    <div className="w-[350px] h-fit border-2  border-blue_color mb-6">
    <div style={{ display: 'flex', justifyContent:"space-between"}} className="p-2 placeholder:text-blue_color placeholder:font-bold">
      <input
      className="bg-transparent outline-none p-2"
        type={passwordVisible ? 'text' : 'password'}
        id="password"
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        required
      />
      <button onClick={togglePasswordVisibility} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        {passwordVisible ? <i className="fa-solid fa-eye"> </i> : <i className="fa-solid fa-eye-slash"></i>}
      </button>
    </div>
  </div>
  )
}
