import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AppointmentBox = () => {

    useEffect(()=>{
        Aos.init();
    },[])

  return (
    <div >
        <div className='max-w-[100vw] md:h-[550px] h-[500px] mt-28'>
        <div className='w-full h-full bg-fixed bg-cover bg-center relative' style={{ backgroundImage: `url('./DB/pics/eventsBg.jpg')` }}>
            <div className='w-full h-full bg-[#8271ffa1] flex justify-center items-center px-4'>
                <div className='flex flex-col justify-center items-center text-center max-w-[800px]'>
                    <h1 data-aos="fade-up" className='text-4xl font-semibold text-white mb-6'>Join Us For An Incredible Experience</h1>
                    <p data-aos="fade-up" className='text-xl text-white'>
                    At our event agency, our unwavering dedication lies in delivering outstanding service 
                    and crafting unforgettable moments that surpass our clients' expectations. 
                    Reach out to us today to allow us to assist you in transforming your vision into reality!
                    </p>

                    <div data-aos="fade-up" className='md:mt-10 mt-6'>
                        <button className='w-[250px] h-[50px] text-lg font-medium bg-white rounded-full transition-all duration-300 ease-in hover:bg-transparent hover:text-white hover:border-2 border-white'>
                            Book an Appointment
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>

         <div className='max-w-[100vw] md:h-[200px] h-[300px] bg-gradient-to-r from-[#af71ff] to-[#48b2ff]'>

            <div className='mx-auto md:max-w-[1190px] h-full flex md:flex-row flex-col md:justify-between justify-around items-center '>
                <div data-aos="fade-up">
                    <h1  className='text-center mx-auto text-4xl md:w-full w-[80%] font-semibold text-white mb-6'>Don't Wait, Book Now</h1>
                    <p className='md:text-left text-center md:text-xl text-white'>Plan your budget and let’s get started.</p>
                </div>
                <div>
                <button data-aos="fade-up" className='w-[220px] h-[50px] text-lg font-medium bg-white rounded-full transition-all duration-300 ease-in hover:bg-transparent hover:text-white hover:border-2 border-white'>
                    Budget Calculator
                </button>
                </div>
            </div>

        </div> 

    </div>
  )
}

export default AppointmentBox