import jpnl from '../assets/images/JPNL.webp'
import karone from '../assets/images/KARONE.webp'
import Nadine from '../assets/images/NADINE.webp'
import Branding from '../assets/images/BRANDING.webp'
import Glass from '../assets/images/GLASSES.webp'
import CLI from '../assets/images/CLI.webp'
import CliCards from '../assets/images/cli-cards.webp'
import Jpnlcard from '../assets/images/jpnl-cards.webp'
import BrandingCard from '../assets/images/branding-cards.webp'
import { LargeQuotes, SmallQuotes } from './Icons'
const RealStories = () => {
    return (
        <div className='px-3 mx-auto max-w-[1220px] py-10'>
            <div className='grid xl:grid-cols-2 my-20 gap-[30px]'>
                <div className='flex flex-col xl:items-end'>
                    <div className='relative'>
                        <h2 className='text-[#18191F] text-5xl font-extrabold leading-[64px] font-inter xl:max-w-[445px]'>Real Stories from Real Customers</h2>
                        <p className='text-[#18191F] text-lg font-inter font-normal leading-[32px] max-w-[573px] mt-3'>Get inspired by these stories.</p>
                        <span className=' absolute top-0 left-0 -translate-x-[67%] -translate-y-[46%]'><LargeQuotes /></span>
                    </div>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg xl:max-w-[350px] w-full mt-6'>
                        <div className='py-2 px-8 flex gap-4'>
                            <span className='mt-20'><SmallQuotes /></span>
                            <div className='flex flex-col'>
                                <img className='h-[120px] w-[120px]' src={CliCards} alt='Icon' />
                                <p className=' font-inter font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-inter font-bold text-[#18191F] text-lg leading-7 mt-6'>Floyd Miles</p>
                                <p className=' font-inter font-medium text-[#969BAB] text-sm leading-6 mb-20'>Vice President, CLI</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex max-md:flex-col max-xl:flex-row flex-col gap-8'>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg xl:max-w-[445px] w-full mt-6'>
                        <div className='pt-10 px-8 flex gap-4'>
                            <span className='mt-20'><SmallQuotes /></span>
                            <div className='flex flex-col'>
                                <img className='w-[78px] h-[50px]' src={Jpnlcard} alt='Icon' />
                                <p className=' font-inter font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-inter font-bold text-[#18191F] text-lg leading-7 mt-6'>Jane Cooper</p>
                                <p className=' font-inter font-medium text-[#969BAB] text-sm leading-6 mb-2'>CEO, JPNL</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg xl:max-w-[350px] w-full mt-6'>
                        <div className='pt-10 px-8 flex gap-4'>
                            <span className='mt-20'><SmallQuotes /></span>
                            <div className='flex flex-col'>
                                <img className='w-[120px] h-[63px]' src={BrandingCard} alt='Icon' />
                                <p className=' font-inter font-normal text-black text-base leading-[32px]'>LemonWares saved our time in Hosting my company page.</p>
                                <p className=' font-inter font-bold text-[#18191F] text-lg leading-7 mt-6'>Kristin Watson</p>
                                <p className=' font-inter font-medium text-[#969BAB] text-sm leading-6 mb-8'>Co-Founder, LeeveOn Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                    <h2 className='text-[#18191F] text-5xl font-extrabold leading-[64px] font-inter'>We serve over 100
                        Nigerian Websites</h2>
                    <p className='text-[#18191F] text-lg font-inter font-normal leading-[32px] max-w-[573px] mt-3'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                </div>
                <div className='grid grid-cols-2 xl:grid-cols-3 items-center justify-center'>
                    <div className='flex justify-center lg:justify-end'>
                        <img src={jpnl} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <img src={karone} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <img src={Nadine} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <img src={Branding} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <img src={Glass} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <img src={CLI} alt='Images ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealStories