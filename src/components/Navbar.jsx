import React, { useState } from 'react'

import { BiMenu } from 'react-icons/bi'

import { RxDotFilled } from 'react-icons/rx'

import { AiOutlineClose } from 'react-icons/ai'




const Navbar = ({ changeDisplay }) => {

  const [nav, setNav] = useState(false);




  return (
    <div className="text-white font-['Montserrat']  md:max-w-[990px] max-w-[383px]  mx-auto md:px-4 lg:px-2">
        <div className='py-6 md:py-10 flex items-end justify-between content-end text-[24px]'>
            {/* <h1 className='lg:hidden'>Eric Boudreaux</h1> */}


            <div className='font-light text-[20px]'>
              <h6>Based In Portland, Oregon</h6>
            </div>

            <div className='block md:hidden z-50 hover:cursor-pointer' onClick={() => setNav(!nav)}>
            <BiMenu size={40} />
            </div>
            <div className='hidden md:flex gap-6 font-medium'>
              <div onClick={() => {changeDisplay('hero')}} className=' flex flex-col-reverse hover:text-[var(--accent-1)] ease-in duration-300 items-center group hover:cursor-pointer z-40'>
                <h6 className='group relative '>HOME</h6>
                <RxDotFilled className='opacity-0 group-hover:opacity-100 duration-300 ease-in text-[var(--accent-1)] absolute top-12 group-hover:top-8' /></div>
              <div onClick={() => {changeDisplay('about')}} className=' flex flex-col-reverse hover:text-[var(--accent-1)] ease-in duration-300 items-center group hover:cursor-pointer z-40'>
                <h6 className='group relative '>ABOUT</h6>
                <RxDotFilled className='opacity-0 group-hover:opacity-100 duration-300 ease-in text-[var(--accent-1)] absolute top-12 group-hover:top-8' /></div>
              <div onClick={() => {changeDisplay('work')}} className=' flex flex-col-reverse hover:text-[var(--accent-1)] ease-in duration-300 items-center group hover:cursor-pointer z-40'>
                <h6 className='group relative '>WORK</h6>
                <RxDotFilled className='opacity-0 group-hover:opacity-100 duration-300 ease-in text-[var(--accent-1)] absolute top-12 group-hover:top-8' /></div>
              <div onClick={() => {changeDisplay('contact')}} className=' flex flex-col-reverse hover:text-[var(--accent-1)] ease-in duration-300 items-center group hover:cursor-pointer z-40'>
                <h6 className='group relative '>CONTACT</h6>
                <RxDotFilled className='opacity-0 group-hover:opacity-100 duration-300 ease-in text-[var(--accent-1)] absolute top-12 group-hover:top-8' /></div>
            </div>

            <div className={nav ? 'md:hidden fixed  bg-black h-screen top-0 w-full left-0 z-50 duration-200 ease-in' : 'md:hidden fixed bg-black h-screen top-0 w-full left-[-100%] z-50 duration-200 ease-in '}>

            <div className='block absolute top-8 right-14 hover:cursor-pointer md:hidden z-50' onClick={() => setNav(!nav)}>
            <AiOutlineClose size={40} />
            </div>

              <ul className='text-center mt-24 text-[42px]'>
                <li onClick={() => {changeDisplay('hero');setNav(!nav)}}  className='my-14 hover:cursor-pointer hover:scale-110 hover:text-[var(--accent-1)] duration-300 ease-in'>HOME</li>
                <li onClick={() => {changeDisplay('about');setNav(!nav)}}  className='my-14 hover:cursor-pointer hover:scale-110 hover:text-[var(--accent-1)] duration-300 ease-in'>ABOUT</li>
                <li onClick={() => {changeDisplay('work');setNav(!nav)}}  className='my-14 hover:cursor-pointer hover:scale-110 hover:text-[var(--accent-1)] duration-300 ease-in'>WORK</li>
                <li onClick={() => {changeDisplay('contact');setNav(!nav)}}  className='my-14 hover:cursor-pointer hover:scale-110 hover:text-[var(--accent-1)] duration-300 ease-in'>CONTACT</li>
              </ul>
            </div>

   

        </div>
    </div>
  )
}

export default Navbar
