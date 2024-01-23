import React from 'react'
import Cpanel from '../assets/images/cpanel.webp'
import Cloudfare from '../assets/images/cloudfare.png'
import Wordpress from '../assets/images/wordpress.webp'
import Imunify from '../assets/images/imunify.webp'
import Litespeed from '../assets/images/litespeed.webp'
import Softaculos from '../assets/images/softaculos.webp'
import { Clock, CloudSetting, Ssl, Support } from './Icons'
const WebHosting = () => {
    return (
        <div className=' pt-20'>
            <div className='max-w-[1280px] mx-auto px-3'>
                <div className="grid grid-cols-2 pb-[118px]">
                    <div>
                        <h2 className=' text-[#18191F] text-5xl font-extrabold leading-[64px] font-inter'>True Cloud Web  Hosting</h2>
                        <p className=' text-[#18191F] text-lg font-normal leading-8 font-inter max-w-[573px]'>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
                    </div>
                    <div className='grid grid-cols-3 items-center'>
                        <img src={Cpanel} alt="partner logos" />
                        <img src={Imunify} alt="partner logos" />
                        <img src={Litespeed} alt="partner logos" />
                        <img src={Softaculos} alt="partner logos" />
                        <img src={Wordpress} alt="partner logos" />
                        <img src={Cloudfare} alt="partner logos" />
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div>
                        <div className="flex justify-center">
                            <Clock />
                        </div>
                        <h3 className='text-center text-xl font-poppins font-bold text-black pb-1 pt-3'>99.9% Uptime</h3>
                        <p className='text-center max-w-[252px] mx-auto text-xs font-light text-black font-poppins'>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <CloudSetting/>
                        </div>
                        <h3 className='text-center text-xl font-poppins font-bold text-black pb-1 pt-3'>Blazing Fast Web Hosting</h3>
                        <p className='text-center max-w-[252px] mx-auto text-xs font-light text-black font-poppins'>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Ssl/>
                        </div>
                        <h3 className='text-center text-xl font-poppins font-bold text-black pb-1 pt-3'>Free SSL Certificates</h3>
                        <p className='text-center max-w-[252px] mx-auto text-xs font-light text-black font-poppins'>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Support/>
                        </div>
                        <h3 className='text-center text-xl font-poppins font-bold text-black pb-1 pt-3'>24x7 Friendly Support</h3>
                        <p className='text-center max-w-[252px] mx-auto text-xs font-light text-black font-poppins'>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebHosting
