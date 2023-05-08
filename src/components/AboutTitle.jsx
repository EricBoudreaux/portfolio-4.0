import React from 'react'



const AboutTitle = () => {
  return (

    <div className='relative font-["Open_sans"] font-black text-white text-center md:text-end  px-0'>
      <div className='opacity-80 animate__animated animate__slideInDown flex items-center justify-between md:max-w-[1060px] mx-auto'>

          <div className='md:hidden text-[80px] mx-auto tracking-[6px] leading-[80%]'>
            <p> 
                I'M ERIC
            </p>

          </div>
          <div className='hidden md:flex justify-between md:max-w-[1060px] w-full  lg:hidden text-[180px]  leading-[80%]'>
            <p className='z-40'> 
                I'M
            </p>


            <p className='z-40'> 
                ERIC
            </p>
  
          </div>
          <div className='hidden lg:inline mx-auto text-center text-[160px] tracking-[5.5px] leading-[90%]'>
            <p className=''> 
                HI, I'M ERIC
            </p>

          </div>


          {/* Image goes here */}
          </div>

    </div>
  )
}

export default AboutTitle
