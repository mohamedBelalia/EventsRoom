import React, { useEffect } from 'react';
import DataOfAdventages from './DataOfAdventages';
import img from "./teamImg.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';
import './test.css'
const Advantages = () => {
 
  useEffect(()=>{Aos.init()},[]);
  return (
    <div className=''>
      <div className='-my-40 pt-60  pb-10 md:flex lg:flex px-10 ' style={{background:"#f2f3f5"}}>
      <img className='lg:w-2/5  md:w-2/5 md:h-2/5 w-3/5 mb-10 mr-10' src={img} alt="" />
      <div >
                <h1 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500'  data-aos="fade-up">ADVANTAGES</h1>
                <h1 className='text-4xl my-6 font-semibold' data-aos="fade-up">Celebrate  With Us</h1>
            <div className='text-gray text-xl mb-32 opacity-60 font-semibold'>
                <p  data-aos="fade-up" className='text-grey opacity-60'> We are a group of seasoned event planners and coordinators committed to crafting extraordinary moments for our clients.</p>
                <p  data-aos="fade-up" className='text-grey  opacity-60'> No matter the occasion — be it a corporate event or a unique celebration—we possess the knowledge to ensure its resounding success.</p>
            </div>   
        </div>
      </div>

      <div data-aos="fade-up" className='grid px-10 md:grid-cols-4 md:mt-20 grid-cols-2 my-10 mx-10 relative lg:-mt-60 z-30 lg:ml-40 justify-around  bg-gradient-to-r  from-purple-400 to-blue-400 py-6 mr-10 rounded'>
      {DataOfAdventages.map((e,index)=>{
        return(
        
           <div key={index} className='flex flex-col'>
            <span className='text-white md:text-7xl text-4xl font-semibold'>{e.number}</span>
            <span className='text-white '>{e.description}</span>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Advantages