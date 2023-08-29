import { Pricing } from "../../constant"
import { greentick } from "../../assets"
import { Link } from "react-router-dom"

export const PricingPage = () => {
  return (
    <>
    <div className="flex justify-center p-[8rem] text-center bg-navbar_bg" id="pricing">
      <div>
        <p className="text-3xl my-3 font-bold pb-2">
            Simple, easy pricing plans <br></br> for the application
        </p>
        <>
          <div className="grid gap-[1rem] grid-cols-3 m-auto feature-card text-left">
            {Pricing.map((Pricing) => (
              <div className="w-[22rem] h-full bg-white border rounded-lg px-4 py-5 hover:border-amber-400 hover:border-1 m-auto">
                <p>{Pricing.title}</p>
                <p className="text-3xl">{Pricing.money}<sub className="text-sm">/ Month</sub></p>
                <ul className='mt-5 space-y-2'>
                    {Pricing.points.map((point, index) => (
                    <li key={`experience-point-${index}`}
                    className="text-white-100 text-[14px]
                    pl-1 tracking-wider flex"
                    ><img src={greentick} className="h-fit mr-3"></img>
                        {point}
                    </li>
                    ))}
                </ul>
                <div className="flex justify-center mt-5">
               <Link to={Pricing.href}><button className='h-fit rounded-md px-10 py-2 cursor-pointer border-[1px] border-blue_color bg-white text-blue_color hover:bg-blue_color hover:text-white'>{Pricing.btn_words}</button></Link> 
                </div>
            </div>
            ))}
          </div>
        </>
      </div>
    </div>
    </>
  )
}
