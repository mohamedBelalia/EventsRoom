import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [showNav,setShowNav]=useState(true)
    const handleNav =()=>{
        setShowNav(!showNav)
    }
    return (
        <header className='max-w-[1150px] m-auto mx-auto'>
            <div className='text-white max-w-[1340px] md:px-6  absolute z-50 top-0 left-0 flex justify-between w-full items-center h-24 p-4 large-width:px-4'>
                <h1 className='text-4xl font-bold w-auto hover:cursor-pointer'>REVOOM</h1>
                <ul className='hidden custom-lg:flex justify-between large-width:w-[60%] w-[50%] items-center'>
                    <li className='text-[17px] font-semibold hover:cursor-pointer hover:ease-in-out duration-[350ms] hover:text-[22px]'>Demos</li>
                    <li className='text-[17px] font-semibold hover:cursor-pointer hover:ease-in-out duration-[350ms] hover:text-[22px]'>About Us</li>
                    <li className='text-[17px] font-semibold hover:cursor-pointer hover:ease-in-out duration-[350ms] hover:text-[22px]'>Events</li>
                    <li className='text-[17px] font-semibold hover:cursor-pointer hover:ease-in-out duration-[350ms] hover:text-[22px]'>Portfolio</li>
                    <li className='text-[17px] font-semibold hover:cursor-pointer hover:ease-in-out duration-[350ms] hover:text-[22px]'>Shop</li>
                    <li className='text-[17px] font-semibold hover:cursor-pointer hover:ease-in-out duration-[350ms] hover:text-[22px]'>All Pages</li>
                </ul>
                <button className='text-[20px] border-2 border-white hidden custom-lg:block w-[176px] h-[50px] rounded-[30px] hover:bg-gray-500 hover:bg-opacity-50 hover:ease-in-out duration-[500ms]'>Get In Touch</button>
                <div onClick={handleNav} className='flex custom-lg:hidden hover:cursor-pointer'>
                    <AiOutlineMenu size={25} color='black'/>
                </div>
            </div>
            <div className={!showNav?'fixed left-0 top-0 p-4 custom-lg:hidden justify-between w-[320px] bg-white  text-[#15162f] z-40 h-screen ease-in-out duration-1000':'fixed left-[-100%] ease-in-out duration-1000 z-50 h-screen top-0'}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-4xl font-bold hover:cursor-pointer'>REVOOM</h1>
                    <AiOutlineClose size={25} onClick={handleNav} className='hover:cursor-pointer'/>
                </div>
                <ul>
                    <li className='h-12 leading-[48px] pl-0 px-[24px] text-[18px] font-medium hover:cursor-pointer'>Demos</li>
                    <li className='h-12 leading-[48px] pl-0 px-[24px] text-[18px] font-medium hover:cursor-pointer'>About Us</li>
                    <li className='h-12 leading-[48px] pl-0 px-[24px] text-[18px] font-medium hover:cursor-pointer'>Events</li>
                    <li className='h-12 leading-[48px] pl-0 px-[24px] text-[18px] font-medium hover:cursor-pointer'>Portfolio</li>
                    <li className='h-12 leading-[48px] pl-0 px-[24px] text-[18px] font-medium hover:cursor-pointer'>Shop</li>
                    <li className='h-12 leading-[48px] pl-0 px-[24px] text-[18px] font-medium hover:cursor-pointer'>All Pages</li>
                </ul>
                <button className='mt-6 text-[20px] border border-blue-400 font-medium w-[170px] h-[50px] rounded-[30px]'>Get In Touch</button>
            </div>
            {/**12345!"§$%²³{[]}\" */}
        </header>
    )
}

export default Navbar