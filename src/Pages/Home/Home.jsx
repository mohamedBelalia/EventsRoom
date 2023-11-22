import React from 'react'
import LastEvents from './LastEvents'
import AppointmentBox from './AppointmentBox'
import Reviews from './Reviews'
import Developers from './Developers'

export const Home = () => {
  return (
    <div>
        <LastEvents/>  
        <AppointmentBox/>
        <Reviews/>
        <Developers/>
    </div>
  )
}
