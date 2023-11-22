import React from 'react'
import LastEvents from './LastEvents'
import AppointmentBox from './AppointmentBox'
import Reviews from './Reviews'

export const Home = () => {
  return (
    <div>
        <LastEvents/>  
        <AppointmentBox/>
        <Reviews/>
    </div>
  )
}
