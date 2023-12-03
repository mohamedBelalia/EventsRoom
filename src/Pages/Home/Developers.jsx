import React, { useEffect, useState } from 'react';
import {RiLinkedinBoxLine, RiInstagramLine} from "react-icons/ri";
import DevelopersD from '../../insteadDatabase/json_files/DevelopersData.json';
import MLogo from './DevelopersData/M.png';
import SLogo from './DevelopersData/S.png';
import ALogo from './DevelopersData/A.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Developers = () => {

    useEffect(()=>{
        Aos.init();
    },[])


    const [mohammed,setMohammed]=useState(1)
    const [ayoub,setAyoub]=useState(0)
    const [soufiane,setSoufiane]=useState(0)
    const [current,setCurrent]=useState(DevelopersD.DevelopersD[0])
    const showMember =(n)=>{
        if(n===1){
            setMohammed(1);setAyoub(0);setSoufiane(0);setCurrent(DevelopersD.DevelopersD[0])
        }
        else if(n===2){
            setMohammed(0);setAyoub(2);setSoufiane(0);setCurrent(DevelopersD.DevelopersD[1])
        }
        else{
            setMohammed(0);setAyoub(0);setSoufiane(3);setCurrent(DevelopersD.DevelopersD[2])
        }
    }
    return (
        //central div
        <div className='flex flex-col max-w-[1150px] custom-lg:mx-auto items-center justify-center custom-lg:my-0 mx-4 custom-lg:h-[600px] h-fit '>
                <p data-aos="fade-up" className='mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-cyan-500'> MEET THE TEAM</p>
                <h2 data-aos="fade-up" className='custom-lg:mb-14 mb-5 text-4xl font-semibold text-blue-950'>Our Creative Team</h2>
                {/** after h2 div */}   
                <div className='w-full flex justify-between flex-col custom-lg:flex-row items-center custom-lg:h-fit'>
                    {/**list div */}
                    <div data-aos="fade-up" className='flex flex-col w-full custom-lg:w-[40%] custom-lg:h-[300px] h-fit justify-between'>
                        <div id='Mohamed' onClick={()=>showMember(1)} className={mohammed===1?'relative bg-gray-[A6A6A4] shadow-lg bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-500 text-white left-4 pr-[-20px] ease-in-out duration-700 hover:cursor-pointer': 'relative bg-white  shadow-lg custom-lg:h-[30%] ease-in-out duration-700 hover:cursor-pointer'}>
                            <div className='flex flex-row m-5 justify-start bg-[ima] hover:cursor-pointer'>
                                <img src={MLogo} alt='Mohammed' className='w-[13%] rounded-[50%] bg-blue-200'/>
                                <div className='flex flex-col w-[70%] justify-center  ml-6'>
                                    <p className='font-semibold text-[20px]'>Mohammed Bellalia</p>
                                    <p className={mohammed===1?'mt-1 text-white ease-in-out duration-700':'mt-1 text-gray-400 ease-in-out duration-700'}>Manager & FS Developer</p>
                                </div>
                            </div>
                        </div>
                        <div id='Ayoub' onClick={()=>showMember(2)} className={ayoub===2?'relative bg-white shadow-lg bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-500 text-white left-4 ease-in-out duration-700 hover:cursor-pointer':'relative bg-white shadow-lg custom-lg:h-[30%] ease-in-out duration-700 hover:cursor-pointer'}>
                            <div className='flex flex-row m-5 justify-start hover:cursor-pointer'>
                                <img src={ALogo} alt='' className='w-[13%] rounded-[50%] bg-blue-200'/>
                                <div className='flex flex-col w-[70%] justify-center ml-6'>
                                    <p className='font-semibold text-[20px]'>Ayoub Benjaa</p>
                                    <p className={ayoub===2?'mt-1 text-white ease-in-out duration-700':'mt-1 text-gray-400 ease-in-out duration-700'}>Founder & FS Developer</p>
                                </div>
                            </div>
                        </div>
                        <div id='Soufiane' onClick={()=>showMember(3)} className={soufiane===3?'relative bg-white shadow-lg bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-500 text-white left-4 ease-in-out duration-700 hover:cursor-pointer':'relative bg-white shadow-lg custom-lg:h-[30%] ease-in-out duration-700 hover:cursor-pointer'}>
                            <div className='flex flex-row m-5 justify-start'>
                                <img src={SLogo} alt='' className='w-[13%] rounded-[50%] bg-blue-200'/>
                                <div className='flex flex-col w-[70%] justify-center ml-6'>
                                    <p className='font-semibold text-[20px]'>Soufiane Benseddiq</p>
                                    <p className={soufiane===3?'mt-1 text-white ease-in-out duration-700':'mt-1 text-gray-400 ease-in-out duration-700'}>Organizer & FS Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/**current div */}
                        <div data-aos="fade-up" className='custom-lg:w-[50%] sm:w-[90%] custom-lg:h-[80%] custom-lg:mt-0 custom-lg:mx-0 sm:mx-4 mt-10 h-fit flex flex-col justify-between '>
                            <div className='h-[50%] flex sm:flex-row flex-col sm:text-left text-center justify-between items-center '>
                                <img alt='' src={mohammed===1?MLogo:ayoub===2?ALogo:SLogo} className='custom-lg:w-[25%] custom-lg:max-h-[135px]  max-h-[125px] rounded-[50%] bg-blue-200'/>
                                <div className='h-[75%] sm:w-[70%] w-full flex flex-col justify-between'>
                                    <h2 className='md:text-4xl text-2xl font-semibold'>{current.name}</h2>
                                    <p className='text-gray-400 font-semibold text-[15px] '>{current.role}</p>
                                    <div id='contact' className='flex justify-center sm:justify-start'>
                                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/"><RiLinkedinBoxLine size={25} color='blue' className='hover:cursor-pointer mr-3'/></a>
                                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/"><RiInstagramLine size={25} color='purple' className='hover:cursor-pointer'/></a>
                                    </div>
                                </div>
                            </div>
                            <p className='custom-lg:h-fit sm:mt-0 mt-6 text-[16px] leading-[25px] text-gray-400 font-semibold text-justify'>{current.text}</p>
                        </div>
                </div>
            
        </div>
            
    )
}

export default Developers
