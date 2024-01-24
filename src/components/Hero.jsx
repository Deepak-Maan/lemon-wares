import React from 'react'
import HeroImg from '../assets/images/girl-with-laptop.webp'

const Hero = () => {
  return (
    <div className=' max-w-[1200px] px-3 mx-auto'>
      <div className=' grid lg:grid-cols-2 gap-20'>
        <div>
          <h2 className=' text-[35px] sm:text-[45px] lg:text-[64px] font-bold font-poppins leading-10 lg:leading-[77px] text-[#2E2E2E] max-w-[608px]'>Premium Web Hosting for Your Website</h2>
          <p className=' text-base font-normal leading-7 font-inter text-[#808080] max-w-[448px] pt-8 tracking-[0.8px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
          <div className=' pt-14 flex gap-6'>
            <button className=' font-normal text-sm leading-6 font-poppins text-black border border-[#000] p-3 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#B00000] after:hover:text-white after:right-1/2 overflow-hidden hover:shadow-[0_0_64px_0px_rgba(176,0,0,0.30)] after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-500 after:transition-all after:duration-500 transition-all duration-500  hover:text-white'>Create an Account</button>
            <button className=' font-normal text-sm leading-6 font-poppins text-black border border-[#000] p-3 rounded-lg'>Choose your plan</button>
          </div>
        </div>
        <div>
          <img className='lg:w-full' src={HeroImg} alt="Hero Img" />
        </div>
      </div>

    </div>
  )
}

export default Hero
