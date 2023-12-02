import React from 'react'
import LastEvents from './LastEvents'
import AppointmentBox from './AppointmentBox'
import Reviews from './Reviews'
import Developers from './Developers'
import About from '../AboutUs/About'
import Landing from "./Landing"

export const Home = () => {
  return (
    <div>
        <Landing/> 
        <About /> 
        <LastEvents/>  
        <AppointmentBox/>
        <Reviews/>
        <Developers/>
    </div>
  )
}
