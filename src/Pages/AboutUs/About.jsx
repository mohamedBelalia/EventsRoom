import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import DataOfAbout from './DataOfAbout'
import "../GlobalStyle.css"
import Advantages from '../Advantages/Advantages';

const About = () => {

    useEffect(()=>{
        Aos.init();
    },[])
    
  return (
    
    <div className=''>
          <div className='flex px-10 pt-32  flex-col'  >
        
            <div className='mb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500'  data-aos="fade-up">ABOUT US</div>
            <span className='md:text-3xl sm:text-2xl lg:text-4xl font-semibold'  data-aos="fade-up">We customize our event services to meet your individual needs, guaranteeing comprehensive management of every detail from the beginning till the end of your event.</span>
            <div className=' w-full flex flex-col md:flex-row  justify-between sm:flex-col   ' data-aos="fade-up">
                <span className='w-1/2 font-semibold opacity-60 md:text-sm lg:text-lg mt-8'>No matter if you're organizing a corporate event, or wedding, we possess the knowledge and resources needed to ensure its success.</span>
                <button className='border w-40 border-indigo-500 transition ease-in-out hover:text-white  py-3 px-7 my-9 rounded-full bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 '>About Us</button>
            </div> 



            <div className='lg:flex md:grid md:grid-cols-2 gap-6 font-semibold ' >
                {DataOfAbout.map((e,index)=>{
                  return( 
                        <div key={index} className=' bg-white  my-5 shadow-lg py-10 p-10 pr-22' data-aos="fade-up"  >
                          <div style={{background:"#f2f3f5",color:"#af71ff"}} className='text-4xl  flex justify-center items-center  w-20 h-20 rounded mb-2'> {e.img}</div>
                            <h1 className='text-xl  font-semibold mb-2'>{e.title}</h1>
                            <p className='text-grey opacity-60 '>{e.para}</p>
                        </div>
              ) })}

          </div>
        </div>
        <Advantages/>
        </div>
   
  )
}

export default About