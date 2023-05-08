import React from 'react'

import HeroTitle from './HeroTitle'

import 'animate.css';



const About = () => {
  return (
    <div className=''>
        <HeroTitle /> 
        <div className='hidden px-2 lg:flex justify-between h-30 animate__animated animate__slideInUp mt-16 md:max-w-[990px] mx-auto'>
        <h6 className="text-white font-thin text-[22px] leading-tight w-[30%] max-w-[375px]">
            I'm focused on building products to connect with people
            through creativity, technology, and compassion...
        </h6>
        <h6 className="text-white font-thin text-[22px] leading-tight text-end w-[30%] max-w-[375px] place-self-end">
            ...with a vision that merges
            the beauty of fantasy within
            the bounds of reality.
        </h6>
        </div>
    </div>
  )
}

export default About
