import React from 'react'
import { LeftTriangle, LeftTriangle2, RightTriangle, Whatsapp } from './Icons'

const GetInTouch = () => {
  return (
    <div className="overflow-hidden " id='contact'>
      <div className='max-w-[1220px] mx-auto px-3 bg-[#F7FAFE] rounded-2xl relative'>
        <div className='absolute bottom-[10%] -right-4 max-lg:hidden '><LeftTriangle /></div>
        <div className='absolute left-[30%] top-0 h-[40px] w-[40px] max-lg:hidden '><LeftTriangle2 /></div>
        <div className='absolute bottom-[10%] left-[10%] h-[40px] w-[40px] max-lg:hidden '><RightTriangle /></div>
        <div className='   px-5 sm:px-12 lg:pl-[118px] lg:pr-[90px]'>
          <h2 className=' text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-6 md:leading-[44px] lg:leading-[88px] font-poppins pt-5 sm:pt-10 md:pt-14 lg:pt-20 font-semibold text-center mx-auto max-w-[1024px]'>We're here to make your website awesome.</h2>
          <div className="flex justify-center pt-10 pb-5 md:pb-10 lg:pb-[88px] font-poppins leading-6 text-sm font-normal"><a href="whatsapp://send?phone=+919034394727" className='py-3 gap-2 px-4 group hover:text-[#B00000] hover:bg-transparent border-2 border-transparent hover:border-[#B00000] duration-300 text-white bg-[#B00000] flex rounded-lg'><Whatsapp /> Get  in touch with us</a></div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
