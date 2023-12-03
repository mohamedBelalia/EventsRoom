import React from 'react'
import { Fade, Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img1 from "./LandingImages/1.jpg"
import img2 from "./LandingImages/2.jpg"
import img3 from "./LandingImages/3.jpg"

  
const slideImages = [
    {
      url: img1,
      caption1: "Discover the Magic of ",
      caption2: "Your Unforgettable Event",
      caption3: "From elegant soirees to high-energy gatherings, our events",
      caption4: " offer something special for every occasion and every guest.",
    },
    {
      url: img2,
      caption1: "Curating Memorable ",
      caption2: "Moments for Your Event",
      caption3: "Be part of a community that celebrates uniqueness, where ",
      caption4: "each event promises to be a distinct and remarkable affair. ",
    },
    {
      url: img3,
      caption1: "Unleash the Power of",
      caption2: " Your Distinctive Event",
      caption3: " Discover a world of enchanting events tailored to your",
      caption4: "  desires, where unforgettable moments come to life.",
      
    }
  ]


const divStyle = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
  height: "100vh",
  backgroundSize: 'cover',

}

const spanStyle = {
  background: '#efefef',
}



function DataOfLanding () {

   

  return (
    <div className='slide-container'>
      <Fade>
        {slideImages.map((image, index)=>{
          return <div key={index} className=''>
            <div className=' bg ' style={{...divStyle, backgroundImage:`url(${image.url})`, filter:"blur(1.5px)"}}></div>
            <div className=' flex text-white  flex-col items-center justify-center absolute w-full py-28 top-0  font-semibold' >
                  <span className='text-4xl md:text-5xl lg:text-7xl  ' style={{spanStyle}}>{image.caption1}</span>
                  <span className='lg:text-7xl text-4xl md:text-5xl ' style={{spanStyle}}>{image.caption2}</span>
                  <span className='pt-10 font-normal text-sm md:text-xl' style={{spanStyle}}>{image.caption3}</span>
                  <span className='font-normal text-sm md:text-xl' style={{spanStyle}}>{image.caption4}</span>
                  <button className='border-2 transition ease-in-out delay-150 py-2 md:py-3 px-7 text-white hover:bg-white hover:text-black my-9 rounded-full' >Get in Touch</button>
            
            </div>
          </div>
        })}
      </Fade>
    </div>
  )
}

export default DataOfLanding