import { Application_Features } from "../../constant"


export const SomeFeatures = () => {
  return (
 <>
 <div className="flex justify-center p-[8rem]" id="feature">
      <div>
        <p className="text-center text-3xl pb-[50px] font-bold">
            Some Core Features <br></br> that help you run your business
        </p>
        <>
        <div className="grid gap-[2rem] w-[60rem] grid-cols-3 m-auto feature-card">
          {Application_Features.map((Application_Feature)=> (
                 <div className="shadow-md w-full p-5 hover:border-2 border-box_color">
                 <div className="my-2 w-14 h-14 border rounded-[50%] flex items-center justify-center bg-blue_color text-white">
                  <img className="p-2" src={Application_Feature.icon}></img>
                 </div>
                 <h1 className="text-box_color"><b>{Application_Feature.title}</b></h1>
                 <div className="text-justify my-2">
                   <p className="text-box_color">
                {Application_Feature.message}
                   </p>
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


