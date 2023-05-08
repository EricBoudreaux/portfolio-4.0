import React from 'react'

import AboutTitle from './AboutTitle'

import AboutImg from '../img/About_img.png'


const About = () => {
  return (
    <div className='md:max-w-[990px] max-w-[383px] mx-auto'>
      <AboutTitle />

      <div className='animate__animated animate__slideInUp lg:flex'>
      <img src={AboutImg} className='md:hidden animate-spin mx-auto my-4 w-44 left-[28%] top-[-20px]' alt="my big head" />
      <img src={AboutImg} className='hidden md:block lg:hidden absolute animate-spin mx-auto my-4 left-[30%] bottom-[140%] md:w-[25%] z-0' alt="my big head" />
      <img src={AboutImg} className='hidden lg:inline animate-spin mx-auto my-4 left-[30%] bottom-[140%] md:w-[35%] z-0' alt="my big head" />
      <div>
      <h6 className="text-white lg:text-end font-bold text-[18px] leading-tight md:px-4 md:mt-32 lg:mt-12  mx-auto">
      It starts with a click. 
      </h6>
      <h6 className="text-white lg:text-end font-thin text-[14px] md:text-[16px] lg:text-[18px] leading-tight max-w-[500px] md:max-w-[1060px] md:px-4 mt-4 mx-auto">
      Ever since I was a kid, computers have fascinated me. From the time I started discovering the intricacies of my grandmother’s windows 3.0 machine to now, typing on my macbook , I’ve never lost that same wonder and appreciation the boundless possibilities that technology can achieve. Fast forward twenty or so years, while locking down for the covid pandemic, I reignited that old
      flame and started to teach myself UX/UI and web development. It perfectly caters to both my
      mind for engineering, and my passion for creativity. Here I am, three years later, having learned
      such a wide array of new things, and I’ve never been more excited to learn everything else.     
        </h6>
        </div>
        {/* <button>Say hi!</button> */}
        </div>
    </div>
  )
}

export default About
