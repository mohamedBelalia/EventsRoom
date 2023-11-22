import React, { useRef } from 'react'
import { GrStar } from "react-icons/gr"
import reviewsData from "../../insteadDatabase/json_files/ReviewsData.json"
import { BsChevronLeft , BsChevronBarRight, BsChevronRight  } from "react-icons/bs"


const screenWidth = 350 ;
const Reviews = () => {

    const reviewsRight = (element) =>{
        element.scrollLeft += screenWidth
    }
    const reviewsLeft = (element) =>{
          element.scrollLeft -= screenWidth
    }

    const reviewsCards = useRef();

  return (
    <div className='my-20 mb-16 md:pl-4 px-4 mx-w-[1190px]'>

        
            <div className='md:w-[80%] mx-auto mb-[50px]'>
                <p className='text-[#af71ff] tracking-[5px] text-[14px] font-semibold'>OUR CUSTOMERS</p>
                <h1 className='text-[40px] font-semibold mt-2 text-[#0a0041]'>Testimonials</h1>
                <div className='flex justify-between items-center'>
                    <p className='md:w-1/2 text-[#7881a1] text-[19px] my-6'>
                    Elevate your event with our professional planning and execution. 
                    From concept to completion, we handle every detail of your event.
                    </p>
                    <div className='md:flex hidden gap-6'>
                        <div onClick={()=>reviewsLeft(reviewsCards.current)} className='flex justify-center items-center cursor-pointer w-[50px] h-[50px] rounded-full border border-[#af71ff] hover:bg-gradient-to-r from-[#af71ff] to-[#48b2ff]'> <BsChevronLeft/></div>
                        <div onClick={()=>reviewsRight(reviewsCards.current)} className='flex justify-center items-center cursor-pointer w-[50px] h-[50px] rounded-full border border-[#af71ff] hover:bg-gradient-to-r from-[#af71ff] to-[#48b2ff]'> <BsChevronRight/></div>
                    </div>
                </div>
            </div>

        <div className='w-full flex md:justify-end items-center'>
            <div ref={reviewsCards} className="md:w-[90%] w-full flex scroll-smooth overflow-x-auto scrollbar-none mb-10 md:mb-[100px]">

            {
                reviewsData.reviews.map((review , key)=>(
                    <div key={key} className='min-w-[350px] cursor-pointer group hover:bg-gradient-to-r from-[#af71ff] to-[#48b2ff] ml-6 h-[330px] p-6 flex flex-col justify-between border border-[#af71ff]'>
                    <div className='flex gap-2 items-center'>
                        <GrStar className='text-xl text-[#af71ff] group-hover:text-white'/>
                        <GrStar className='text-xl text-[#af71ff]  group-hover:text-white'/>
                        <GrStar className='text-xl text-[#af71ff]  group-hover:text-white'/>
                        <GrStar className='text-xl text-[#af71ff]  group-hover:text-white'/>
                        <GrStar className='text-xl text-[#af71ff]  group-hover:text-white'/>
                    </div>

                    <div>
                        <h1 className='text-2xl font-semibold mb-4 group-hover:text-white'>{review.name}</h1>
                        <p className='text-[#7881a1] font-semibold group-hover:text-white'>{review.text}</p>
                    </div>

                </div>
                ))
            }

            </div>
        </div>
        <div className='flex md:hidden gap-6'>
            <div onClick={()=>reviewsLeft(reviewsCards.current)} className='flex justify-center items-center cursor-pointer w-[50px] h-[50px] rounded-full border border-[#af71ff] hover:bg-gradient-to-r from-[#af71ff] to-[#48b2ff]'> <BsChevronLeft/></div>
            <div onClick={()=>reviewsRight(reviewsCards.current)} className='flex justify-center items-center cursor-pointer w-[50px] h-[50px] rounded-full border border-[#af71ff] hover:bg-gradient-to-r from-[#af71ff] to-[#48b2ff]'> <BsChevronRight/></div>
        </div>
        
    </div>
  )
}

export default Reviews