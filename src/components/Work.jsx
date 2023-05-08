import React from 'react'
import WorkTitle from './WorkTitle'
import Carousel from './Carousel'

import MyWeather from '../img/myweather_website.png'


export const Work = () => {
  return (
    <div className='md:max-w-[990px] max-w-[383px] mx-auto'>
      <WorkTitle />
      <Carousel />


      {/* <div className='mt-8 md:flex animate__animated animate__slideInUp'>
        <div className='md:mr-4 md:px-4'>
          <img className='rounded-[30px] w-[200px] mx-auto h-[200px] md:w-[600px]  object-cover work-img' src={MyWeather}></img>
        </div>
        <div className='text-white mt-4 text-center md:text-start w-full '>
          <h2 className='text-[22px] font-bold'>WHAT IS YOUR WEATHER</h2>
          <h6 className='font-light leading-tight text-[18px]0'>
            A weather application that uses GPS to determine your forcast using
            several widgets and parameters.
          </h6>
          <div className='flex flex-col md:flex-row md:items-center'>
            <h2 className='text-[20px] font-bold'>BUILT USING</h2>
            <h2 className='text-[18px] md:ms-6'>API   REACT   CSS</h2>
          </div>
          <div className='mt-4'>
            <button className='text-black bg-white rounded-[5px] py-2 px-6 hover:bg-black hover:text-white duration-300 ease-in'>PREVIEW</button>
            <button className='text-black ml-4 bg-white rounded-[5px] py-2 px-6 hover:bg-black hover:text-white duration-300 ease-in'>REPO</button>
          </div>
        </div>

      </div> */}

    </div>
  )
}

export default Work

