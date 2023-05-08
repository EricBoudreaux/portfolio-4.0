import React from 'react'

import HeroImg from '../img/Hero_img.png'

import 'animate.css';




const HeroTitle = () => {


  return (
    
    <div className='relative font-["Open_sans"] font-black text-white text-center md:text-start'>
      <div className='opacity-80 animate__animated animate__slideInDown'>
          <div className='md:hidden text-[280px] leading-[80%]'>
            <p> 
                UX
            </p>
            <p className='tracking-[50px]'>
                UI
            </p>
          </div>
          <div className='hidden md:inline-block  lg:hidden text-[280px] leading-[80%]'>
            <p> 
                UX/UI
            </p>
            <p className=''>
                DEV
            </p>
          </div>
          <div className='hidden lg:flex flex-col items-center  text-[170px] w-full leading-[80%]'>
            <p className=''> 
                I'M A UX/UI
            </p>
            <p className='tracking-[30px] lg:tracking-[2px]'>
                DEVELOPER
            </p>
          </div>
        </div>

         <div className='absolute flex md:justify-end lg:justify-center md:pr-[15%] lg:pr-0 top-0 md:top-[20%] lg:top-[-15%] w-full animate__animated animate__slideInUp'>
          <img className='mx-auto md:mx-0 lg:mx-auto w-44 md:w-60 lg:w-44' src={HeroImg} />
        <div className='marker inline absolute leading-[60px] rotate-[353deg] lg:top-56  md:right-0  lg:left-0 md:top-72 top-64 left-[12%] right-[12%]'>
          <p className=' animate-pulse'>Eric </p>
          <p className=' animate-pulse'>Boudreaux</p>
          </div>


        </div> 

    </div>
  )
}

export default HeroTitle
