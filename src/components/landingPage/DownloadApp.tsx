import { play_store, app_store, msk_mobile_phone } from "../../assets"

export const DownloadApp = () => {
  return (
    <>
     <div className='border h-fit p-[1rem] flex bg-blue_color text-white msk_simp text-center'>
    <div className='flex-1 m-auto msk_simp_words'>
        <div className="md:w-[70%] md:ml-[350px]" id="downloadtrack">
    <p className='text-4xl my-6'><b>Download Our App for Free</b></p>
    <p>You can download the app for your desktop, android and ios </p>
    <div className='flex justify-center align-middle mt-4 p-2'>
        <form className='landing_form'> 
            <input type='text' placeholder='Enter your email' className=' w-[300px] md:w-96 h-16 pl-2 text-box_color rounded-lg mb-2'></input>
            <button className='w-[10rem] rounded-xl ml-3 cursor-pointer h-16 bg-amber-400 text-white hover:bg-white hover:text-amber-400 '>Subscribe to Email</button>
        </form>
    </div>
    <p>By Clicking the subscribe to email, your'er confirming that you agree with our <u>Terms and Conditions.</u></p>
    <div className='flex justify-center'>
        <img src={play_store} className='w-40 cursor-pointer'></img>
        <img src={app_store} className='w-[10rem] cursor-pointer'></img>
    </div>
    </div>
        </div>
    <div className=' msk_simp_logo'>
        <img src={msk_mobile_phone} className='w-[500px]'></img>
    </div>
</div>
    </>
  )
}
