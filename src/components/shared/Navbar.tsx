import { useState } from "react"
import { msk_logo } from "../../assets"
import { navlinks } from "../../constant";

export const Navbar = () => {
    let [open, setOpen] = useState(false);
  return (
    <div className='flex flex-wrap justify-between fixed bg-navbar_bg w-full items-center p-7 z-50'>
    <div className='flex items-center'>
        <img src={msk_logo} alt='logo' className='w-12 mx-2'></img>
        <h1 className='text-3xl text-blue_color'><b>Mystorekeeper</b></h1>
    </div>
    <div className={`nav-links mr-[400px] mt-2 md:block ${open ? 'flex':'hidden'}`}>
        <ul className='flex flex-col md:flex-row cursor-pointer'>
            {
                navlinks.map((navlink)=>(
                <li className='px-[20px] hover:text-amber-400 duration-500 font-bold'>{navlink.title}</li>
                ))
            }
            
        </ul>
    </div>
    <div className={`px-4 mt-2 nav-btn md:flex ${open ? 'flex':'hidden'}`}>
        <div id='login' className='h-fit w-40 rounded-md text-center cursor-pointer border-[1px] border-blue_color bg-white text-black font-bold'>
            <p className='m-2'>Log in</p>
        </div>
        <div id='get_started' className='h-fit rounded-md px-3 ml-14 border-[1px] border-blue_color cursor-pointer bg-blue_color text-white'>
            <p className='m-2'>Get Started Free</p>
        </div>
    </div>
    <div onClick={()=> setOpen(!open)} className='text-2xl md:hidden sm:visible text-box_color z-10 absolute right-5 top-7'>
       <i className={open ? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i> 
    </div>
</div>
  )
}
