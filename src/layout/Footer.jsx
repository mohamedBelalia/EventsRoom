import React from 'react'
import {RiLinkedinBoxLine, RiInstagramLine} from "react-icons/ri";
//hey
const Footer = () => {
    return (
        <footer class="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-500 h-fit text-white">
            <div className=' relative max-w-[1150px] md:mx-auto h-fit pt-10 md:px-0  flex flex-col justify-between' >
                {/**up div */}
                <div className='mx-4 md:h-[550px] h-[800px]  flex flex-col md:flex-row justify-between border-b-[1px] border-opacity-50'>
                    {/**left div */}
                    <div className='md:w-[52%] w-full h-[85%] md:mb-0 mb-10 flex flex-col justify-between'>
                        <h1 className='text-4xl font-bold w-fit hover:cursor-pointer'>REVOOM</h1>
                        <h3 className='md:text-7xl text-6xl'>Take Your Event to New Heights</h3>
                        <p>Our team comprises skilled event planners who are committed 
                            to crafting unforgettable experiences for our valued clients.
                        </p>
                        <button className='text-[20px] border bg-white text-black w-[176px] h-[50px] rounded-[30px] hover:none hover:bg-opacity-0 hover:text-white hover:ease-in-out duration-[500ms]'>Contact Us</button>
                    </div>
                    {/**right div */}
                    <div className='md:w-[41%] w-full md:h-[85%] h-[500px] flex flex-col justify-between '>
                        {/**right up div */}
                        <div className='md:h-[40%] flex'>
                            {/**phone div */}
                            <div className='flex flex-col w-[30%]'>
                                <p className='text-xl'>phone</p>
                                <div className='mt-5 h-14 flex flex-col justify-between'>
                                    <p>06 84 71 16 37</p>
                                    <p>06 65 64 45 15</p>
                                </div>
                            </div>
                            {/**adress div */}
                            <div className='w-[45%] ml-14 flex custom-lg:h-[82%] flex-col justify-between'>
                                <p className='text-xl'>Adress</p>
                                <div className=''>
                                    <p>Marrakech, Azli Centre BTS-MCW</p>
                                    <p className='mt-2'>Marrakech Mhamid 9, Res Zakaria App 3</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full border-t-[1px] opacity-50' />

                        {/**right down div */}
                        <div className='h-[40%] flex justify-between text-xl'>
                            <div className='flex flex-col h-fit'>
                                <a href="Link">About</a><a href="Link"> Events</a>
                            </div>
                            <div className='flex flex-col h-fit'>
                                <a href="Link">Team</a><a href="Link">  Pricing</a>
                            </div>
                            <div className='flex flex-col h-fit'>
                                <a href="Link">Services</a><a href="Link"> Shop</a>
                            </div>
                            <div className='flex flex-col h-fit'>
                                <a href="Link">Portfolio</a><a href="Link"> Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='contact' className='flex justify-center h-[10%] mt-5'>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/"><RiLinkedinBoxLine size={40} color='white' className='hover:cursor-pointer mr-4 '/></a>
                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/"><RiInstagramLine size={40} color='white' className='hover:cursor-pointer'/></a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
