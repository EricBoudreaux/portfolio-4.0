import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MyWeather from '../img/myweather_website.png'
import Chatter from '../img/chatter_website.png'
import Photography from '../img/photography_website.png'
import Politics from '../img/politics_website.png'
import DragonBlade from '../img/Dragonblade_website.png'


export default function SimpleSlider() {
  var settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider className="py-2 animate__animated animate__slideInUp" {...settings}>
      {/* Slide 1 */}
      <div>
      <div className='mt-8 md:flex items-center px-2 justify-between'>

          <img className='rounded-[30px] basis-1/4 w-[200px] mx-auto h-[200px] md:w-[300px]  object-cover work-img' src={MyWeather}></img>

        <div className='text-white mt-4 basis-2/4 md:ml-[-25px]'>
          <h2 className='text-[22px] font-bold'>WHAT IS YOUR WEATHER</h2>
          <h6 className='font-light leading-tight text-[18px]'>
            A weather application that uses GPS to determine your forecast using
            several widgets and parameters.
          </h6>
          <div className='flex flex-col md:flex-row md:items-center'>
            <h2 className='text-[20px] font-bold'>BUILT USING</h2>
            <h2 className='text-[18px] md:ms-6'>API   REACT   CSS</h2>
          </div>
          <div className='mt-4'>
          <a href='https://www.whatisyourweather.com/' target='_blank'>
              <button className='text-black bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>PREVIEW</button>
            </a>
            <a href='https://github.com/EricBoudreaux/What-is-your-weather' target='_blank'>
              <button className='text-black ml-4 bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>REPO</button>
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Slide 2 */}
      <div>
      <div className='mt-8 md:flex items-center px-2 justify-between'>

          <img className='rounded-[30px] basis-1/4 w-[200px] mx-auto h-[200px] md:w-[300px]  object-cover work-img' src={DragonBlade}></img>

        <div className='text-white mt-4 basis-2/4 md:ml-[-25px]'>
          <h2 className='text-[22px] font-bold'>DRAGONBLADE</h2>
          <h6 className='font-light leading-tight text-[18px]'>
            A website to advertise and serve as a download hub for a JRPG game that I'm designing and building.
          </h6>
          <div className='flex flex-col md:flex-col'>
            <h2 className='text-[20px] font-bold'>BUILT USING</h2>
            <h2 className='text-[18px]  uppercase'>ReactJS  Firebase  Tailwind</h2>
          </div>
          <div className='mt-4'>
            <a href='https://www.dragonbladegame.com/' target='_blank'>
              <button className='text-black bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>PREVIEW</button>
            </a>
            <a href='https://github.com/EricBoudreaux/dragonblade-react-website' target='_blank'>
              <button className='text-black ml-4 bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>REPO</button>
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Slide 3 */}
      <div>
      <div className='mt-8 md:flex items-center px-2 justify-between'>

          <img className='rounded-[30px] basis-1/4 w-[200px] mx-auto h-[200px] md:w-[300px]  object-cover work-img' src={Chatter}></img>

        <div className='text-white mt-4 basis-2/4 md:ml-[-25px]'>
          <h2 className='text-[22px] font-bold uppercase'>chatter</h2>
          <h6 className='font-light leading-tight text-[18px]'>
            A simple chatroom application with email verification. 
          </h6>
          <div className='flex flex-col md:flex-row md:items-center'>
            <h2 className='text-[20px] font-bold'>BUILT USING</h2>
            <h2 className='text-[18px] md:ms-6 uppercase'>reactjs   firebase   CSS</h2>
          </div>
          <div className='mt-4'>
          <a href='https://chatter-puce.vercel.app/' target='_blank'>
              <button className='text-black bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>PREVIEW</button>
            </a>
            <a href='https://github.com/EricBoudreaux/chatter' target='_blank'>
              <button className='text-black ml-4 bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>REPO</button>
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Slide 4 */}
      <div>
      <div className='mt-8 md:flex items-center px-2 justify-between'>

          <img className='rounded-[30px] basis-1/4 w-[200px] mx-auto h-[200px] md:w-[300px]  object-cover work-img' src={Politics}></img>

        <div className='text-white mt-4 basis-2/4 md:ml-[-25px]'>
          <h2 className='text-[22px] font-bold'> POLITICIAN 128</h2>
          <h6 className='font-light leading-tight text-[18px]'>
            A political website focused on recruiting volunteers.
          </h6>
          <div className='flex flex-col md:flex-col'>
            <h2 className='text-[20px] font-bold'>BUILT USING</h2>
            <h2 className='text-[18px]  uppercase'>ReactJS  React Router  Tailwind</h2>
          </div>
          <div className='mt-4'>
            <a href='https://political-react-website.vercel.app/' target='_blank'>
              <button className='text-black bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>PREVIEW</button>
            </a>
            <a href='https://github.com/EricBoudreaux/political-react-website' target='_blank'>
              <button className='text-black ml-4 bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>REPO</button>
            </a>
          </div>
        </div>
      </div>
      </div>
      {/* Slide 5 */}
      <div>
      <div className='mt-8 md:flex items-center px-2 justify-between'>

          <img className='rounded-[30px] basis-1/4 w-[200px] mx-auto h-[200px] md:w-[300px]  object-cover work-img' src={Photography}></img>

        <div className='text-white mt-4 basis-2/4 md:ml-[-25px]'>
          <h2 className='text-[22px] font-bold uppercase'>Photosen Photography</h2>
          <h6 className='font-light leading-tight text-[18px]'>
            A website built for a photography company to showcase their work and attract const clients.
          </h6>
          <div className='flex flex-col md:flex-row md:items-center'>
            <h2 className='text-[20px] font-bold'>BUILT USING</h2>
            <h2 className='text-[18px] md:ms-6 uppercase'>ReactJS  React Router  Tailwind</h2>
          </div>
          <div className='mt-4'>
          <a href='https://photography-react-website.vercel.app/' target='_blank'>
              <button className='text-black bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>PREVIEW</button>
            </a>
            <a href='https://github.com/EricBoudreaux/photography-react-website' target='_blank'>
              <button className='text-black ml-4 bg-white btn-shadow rounded-[5px] py-2 px-6 hover:bg-black hover:text-white mb-5 duration-300 ease-in'>REPO</button>
            </a>
          </div>
        </div>
      </div>
      </div>



    </Slider>
  );
}
