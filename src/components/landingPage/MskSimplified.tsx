import { laptop } from "../../assets"


export const MskSimplified = () => {
  return (
    <>
    <div className='border h-fit p-[4rem] flex bg-blue_color text-white msk_simp'>
        <div className='flex-1 msk_simp_logo'>
            <img src={laptop} className='w-[800px]'></img>
        </div>
        <div className='flex-1 m-auto msk_simp_words'>
          <div className="md:w-[70%]">
        <p className='text-3xl my-6'><b>MSK simpilifies the services of your web applications.</b></p>
        <p>Discover a new level of streamlined efficiency with our cutting-edge application. Seamlessly manage every aspect of your web services with advanced user management, shop and warehouse oversight, budget tracking, sales optimization, and more.</p>
        </div>
          </div>
    </div>
    </>
  )
}
