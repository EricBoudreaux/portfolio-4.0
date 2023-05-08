import React from 'react'
import ContactTitle from './ContactTitle'

const Contact = () => {
  return (
    <div className='md:max-w-[990px] max-w-[383px] mx-auto px-2'>
      <ContactTitle />

      <form className='mt-10 flex flex-col gap-6 animate__animated animate__slideInUp'>
            <input className='bg-white py-2 ps-6 rounded-[5px] w-full' type='text' placeholder='Your name'></input>

            <input className='bg-white py-2 ps-6 rounded-[5px] w-full' type='text' placeholder='Your email'></input>

            <textarea rows='5' placeholder="A message" className='bg-white py-2 ps-6 rounded-[5px] w-full'
                />

            <button className='btn-shadow w-[20%] bg-white rounded-[5px] py-2 hover:bg-black hover:text-white duration-300 ease-in'>Send</button>

          </form>
    </div>
  )
}

export default Contact
