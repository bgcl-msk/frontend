

export const Footer = () => {
  return (
    <div className='bg-box_color h-fit p-10 text-white'>
    <div id='footer_div_one' className='py-5 flex justify-between'>
        <div>
            <h3 className='text-3xl'>Start your 30 days free <br></br>trail today!</h3>
        </div>
        <div id='contact' className='h-fit px-4 p-2 cursor-pointer bg-white text-box_color'>
            <p>Contact Us</p>         
        </div>
    </div>
    <hr></hr>
    <div id='footer_div_two' className='py-6 flex justify-between'>
        <div>
            <p className='py-3'><b>About Us</b></p>
            <p className='py-3'>MSK to provide a centralized place for organizations <br></br> ranging from smaller to larger ones to efficiently<br></br> manage their businesses without worrying about <br></br>operational overhead.
            </p>
            <div className='py-3'>
                <ul className='flex cursor-pointer'>
                    <li className='px-3'><i className="fa-brands fa-twitter" ></i></li>
                    <li className='px-3'><i className="fa-brands fa-facebook-f"></i></li>
                    <li className='px-3'><i className="fa-brands fa-instagram"></i></li>
                    <li className='px-3'><i className="fa-brands fa-github"></i></li>
                </ul>
            </div>
        </div>
        <div>
        <p><b>Company</b></p>
        <ul className='py-3'>
            <li className='py-3'>About</li>
            <li className='py-3'>Features</li>
            <li className='py-3'>Works</li>
            <li className='py-3'>Careers</li>
        </ul>
        </div>
        <div>
        <p><b>Help</b></p>
        <ul className='py-3'>
            <li className='py-3'>Customer Support</li>
            <li className='py-3'>Delivery Details</li>
            <li className='py-3'>Terms & Conditions</li>
            <li className='py-3'>Privacy Policy</li>
        </ul>
        </div>
        <div>
        <p><b>Resources</b></p>
        <ul className='py-3'>
            <li className='py-3'>Free e-books</li>
            <li className='py-3'>Development Tutorial</li>
            <li className='py-3'>Blog</li>
            <li className='py-3'>Youtube</li>
        </ul>
        </div>
    </div>
    <p className="text-sm">&copy; Copyrights 2023 Mystorekeeper. All rights reserved.</p>
</div>
  )
}
