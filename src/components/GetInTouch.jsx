import React from 'react'
import { Whatsapp } from './Icons'

const GetInTouch = () => {
  return (
    <div className='max-w-[1220px] mx-auto px-3 bg-[#F7FAFE] rounded-2xl'>
      <div className='   px-5 sm:px-12 lg:pl-[118px] lg:pr-[90px]'>
        <h2 className=' text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-6 md:leading-[44px] lg:leading-[88px] font-poppins pt-5 sm:pt-10 md:pt-14 lg:pt-20 font-semibold text-center mx-auto max-w-[1024px]'>We're here to make your website awesome.</h2>
        <div className="flex justify-center pt-10 pb-5 md:pb-10 lg:pb-[88px] font-poppins leading-6 text-sm font-normal"><button className='py-3 px-4 text-white bg-[#B00000] flex rounded-lg'><Whatsapp/> Get  in touch with us</button></div>
      </div>
    </div>
  )
}

export default GetInTouch
