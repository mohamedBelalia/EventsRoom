import React, { useEffect, useRef } from 'react'
import eventsData from "../../insteadDatabase/json_files/LastEventsData.json"
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css';


const screenWidth = 400 ;
const LastEvents = () => {

    /* to handle the UI with real data we created a json file with fake data */

    useEffect(()=>{
      Aos.init();
  },[])

    const eventsCards = useRef();

    // functions to moving the cards left and right
    
    const sliderRight = (element) =>{
      element.scrollLeft += screenWidth
    }
    const sliderLeft = (element) =>{
        element.scrollLeft -= screenWidth
    }


  return (
    <div className='mx-auto mt-[100px] max-w-[1340px] md:px-6 lg:px-20 3xl:px-0'>
        <h1 className='mb-2 max-w-screen-custom-lg text-blue-950 text-4xl font-medium px-10 md:px-0'>Lastest Events</h1>
        <div ref={eventsCards} className='py-10 scroll-smooth flex overflow-x-auto mx-4 large-width:mx-0 scrollbar-hide' data-aos="fade-up">
          {/* scrollbar-none => to hidde the the scrollbar*/}
          {/* here we map on the data that we got from the db to create for each collection of data a card */}
          {
            eventsData.eventsData.map((eventInfo , key)=>( 
              <div key={key} className='shadow-md md:min-w-[400px] pb-10 min-w-full h-[310px] object-cover object-left-top md:mr-14 mr-6 
                  cursor-pointer group'>
                <div className='overflow-hidden relative'>
                <img className='w-[100%] h-[200px] transition-all duration-300 ease-in group-hover:scale-110 object-cover' src={eventInfo.imgPath} alt="" />
                  <div className='px-6 py-5 flex flex-col justify-between absolute left-0 top-0 bg-[#0000007e] w-[100%] h-[100%]'>
                      <div className='w-[80px] h-[35px] flex justify-center items-center font-bold text-sky-800 bg-white'>
                        <p>699 Dh</p>
                      </div>
                      <div>
                        <p className='text-white font-bold'>FAMILY Breaking bad</p>
                        <h1 className='text-white font-semibold text-2xl'>{eventInfo.eventName}</h1>
                      </div>
                  </div>
                </div>
                  <div className='px-4 py-5'>
                      <div className=''>
                          <p className='md:text-[18px] text-[15px] md:line-clamp-2 line-clamp-3'>{eventInfo.description}</p>
                          {/* line-clamp-3 : to show only 3 lines and hidde the rest , we uesd "npm install @tailwindcss/line-clamp" */}
                      </div>
                  </div>
              </div>
            ))
          }
        </div>
        <div className='flex gap-5 large-width:pl-2 pl-4'>
            <HiChevronLeft className='hidden md:block text-white bg-black cursor-pointer rounded-md w-[40px] text-center h-[40px]'
          onClick={()=>sliderLeft(eventsCards.current)}/>
            <HiChevronRight className='hidden md:block text-white bg-black cursor-pointer rounded-md w-[40px] text-center h-[40px]'
          onClick={()=>sliderRight(eventsCards.current)}/>
        </div>
    </div>
  )
}

export default LastEvents