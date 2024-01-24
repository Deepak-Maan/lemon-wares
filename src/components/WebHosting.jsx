import React from 'react'
import Cpanel from '../assets/images/cpanel.webp'
import Cloudfare from '../assets/images/cloudfare.png'
import Wordpress from '../assets/images/wordpress.webp'
import Imunify from '../assets/images/imunify.webp'
import Litespeed from '../assets/images/litespeed.webp'
import Softaculos from '../assets/images/softaculos.webp'
import { Clock, CloudSetting, Ssl, Support } from './Icons'

const WebHosting = () => {
    const Items = [
        {
            Img: (<Clock />),
            title: "99.9% Uptime",
            Description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
        },
        {
            Img: (<CloudSetting />),
            title: "Blazing Fast Web Hosting",
            Description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
        },
        {
            Img: (<Ssl />),
            title: "Free SSL Certificates",
            Description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
        },
        {
            Img: (<Support />),
            title: "24x7 Friendly Support",
            Description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
        },
    ]
    return (
        <div className=' pt-20'>
            <div className='max-w-[1280px] mx-auto px-3'>
                <div className="grid xl:grid-cols-2 pb-5 md:pb-14 lg:pb-[118px]">
                    <div>
                        <h2 className=' text-[#18191F] text-5xl font-extrabold leading-[64px] font-inter'>True Cloud Web  Hosting</h2>
                        <p className=' text-[#18191F] text-lg font-normal leading-8 font-inter max-w-[573px]'>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-6 sm:gap-0 sm:grid-cols-3 items-center'>
                        <img src={Cpanel} alt="partner logos" />
                        <img src={Imunify} alt="partner logos" />
                        <img src={Litespeed} alt="partner logos" />
                        <img src={Softaculos} alt="partner logos" />
                        <img src={Wordpress} alt="partner logos" />
                        <img src={Cloudfare} alt="partner logos" />
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 mt-5 sm:mt-10 md:mt-20 lg:mt-[100px] xl:mt-[126px] sm:ml-11 sm:mr-12 gap-8 sm:gap-10 xl:gap-5">
                    {
                        Items.map((items, index) => (
                            <div key={index} className='flex w-full justify-center'>
                                <div className='flex flex-col justify-center items-center'>
                                    {items.Img}
                                    <h2 className='text-black font-bold text-base sm:text-xl mt-3 font-poppins'>{items.title}</h2>
                                    <p className='text-black text-xs font-poppins text-center font-light mt-1'>{items.Description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WebHosting
