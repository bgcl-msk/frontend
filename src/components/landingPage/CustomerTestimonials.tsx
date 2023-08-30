import { Testimonies } from "../../constant"

export const CustomerTestimonials = () => {
  return (
   <>
   <div className="text-center p-10">
        <h1 className="text-3xl my-4">
          <b>Customers Testimonials</b>
        </h1>
      </div>
      <div className="grid gap-[2rem] grid-cols-2 md:w-[50%] m-auto customer_card mb-5">
        {
            Testimonies.map((Testimony)=>(
        <div className='shadow p-5 hover:border-2 border-box_color md:w-[30rem]'>
            <div className='my-2'>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            </div>
            <div className='text-justify my-2'>
                <p>{Testimony.words}</p>
            </div>
            <div className='flex'>
                <div className='w-10 h-10 rounded-3xl'>
                    <img className='w-10 h-10 rounded-3xl object-cover' src={Testimony.image}></img>
                </div>
                <div className='mx-2'>
                    <p><b>{Testimony.name}</b></p>
                    <p>{Testimony.position}, {Testimony.company_name}</p>
                </div>
            </div>
        </div>
            ))
        }
      </div>
   </>
  )
}
