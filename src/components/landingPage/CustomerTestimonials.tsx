

export const CustomerTestimonials = () => {
  return (
   <>
   <div className="text-center p-10">
        <h1 className="text-3xl my-4">
          <b>Customers Testimonials</b>
        </h1>
      </div>
      <div className="grid gap-[2rem] grid-cols-2 w-1/2 m-auto customer_card mb-5">
        <div className='shadow w-full p-5 hover:border-2 border-box_color '>
            <div className='my-2'>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            </div>
            <div className='text-justify my-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus odio, recusandae et delectus quidem quas aspernatur fuga laudantium provident beatae sunt laboriosam dolorum dicta rem enim illo consequatur eum.</p>
            </div>
            <div className='flex'>
                <div className='w-10 h-10 rounded-3xl'>
                    <img className='w-10 h-10 rounded-3xl' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'></img>
                </div>
                <div className='mx-2'>
                    <p><b>Bessie Cooper</b></p>
                    <p>Position, Company Name</p>
                </div>
            </div>
        </div>
        <div className='shadow w-full p-5 hover:border-2 border-box_color '>
            <div className='my-2'>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            <i className="fa-solid fa-star text-amber-400"></i>
            </div>
            <div className='text-justify my-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus odio, recusandae et delectus quidem quas aspernatur fuga laudantium provident beatae sunt laboriosam dolorum dicta rem enim illo consequatur eum.</p>
            </div>
            <div className='flex'>
                <div className='w-10 h-10 rounded-3xl'>
                    <img className='w-10 h-10 rounded-3xl' src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
                </div>
                <div className='mx-2'>
                    <p><b>Bessie Cooper</b></p>
                    <p>Position, Company Name</p>
                </div>
            </div>
        </div>
      </div>

   </>
  )
}
