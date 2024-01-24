import React, { useState } from "react";
import { Check } from "./Icons";

const Price = () => {
    const [data, setdata] = useState("tab1")
    function tabs(tab) {
        setdata(tab);
    }
    const box = [
        {
            Heading: "Stater",
            Price: "$2.80",
            Rate: "$12.80",
        },
        {
            Heading: "Standard",
            Price: "$4.20",
            Rate: "$14.80",
        },
        {
            Heading: "Suprem",
            Price: "$7.00",
            Rate: "$17.80",
        },
    ];
    return (
        <div className=" max-w-[1200px] px-3 mx-auto pt-7 sm:pt-10 md:pt-16 lg:pt-32 ">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[50px] font-semibold leading-8 md:leading-[60px] text-center text-black max-w-[650px] mx-auto font-poppins">Ready to get started with Lemon Wares?</h2>
            <p className=" text-base sm:text-[25px] font-normal leading-[25px] font-poppins text-center text-black pt-1 md:pt-9">Choose the package that suits you</p>
            <div className=" flex justify-center gap-4 md:gap-8 items-center pt-4 sm:pt-7 lg:pt-14">
                <p className=" text-base sm:text-[25px] font-normal leading-[25px] font-poppins text-black">Monthly</p>
                <span className="flex w-[70px] sm:w-[93px] h-[40px] sm:h-[50px] rounded-full bg-[#B00000] sm:ml-8 sm:mr-7 relative  items-center cursor-pointer">
                    <span className="flex w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] bg-white rounded-full absolute left-2"></span>
                </span>
                <p className=" text-base sm:text-[25px] font-normal leading-[25px] font-poppins text-black">Yearly</p>
                <p className=" text-[10px] max-sm:hidden font-poppins font-medium text-black leading-[9px] max-w-[87px] max-h-[24px] rounded-lg bg-[#FFE87A] py-[7px] px-[8px]">20% discount</p>
            </div>
            <div className=" flex justify-center  relative pt-3 sm:pt-7 md:pt-10 lg:pt-20 max-w-[856px] mx-auto w-full">
                <span className=" border-bottom-2"></span>
                <div className={`${data === "tab1" && "  relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:w-full before:left-0  "}  flex w-1/2 justify-center`}>
                    <p onClick={() => tabs('tab1')} className={` text-lg sm:text-[30px] cursor-pointer font-semibold leading-10 font-poppins text-black`}> Basic </p>
                </div>
                <div className={`${data === "tab2" && "  relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:w-full before:left-0 "}  flex w-1/2 justify-center`}>
                    <p onClick={() => tabs('tab2')} className={` text-lg sm:text-[30px] cursor-pointer font-semibold leading-10 font-poppins text-black`}> Premium  </p>
                </div>
            </div>
            {data === "tab1" && <div className="grid sm:grid-cols-2 xl:grid-cols-3 mt-5 sm:mt-10 md:mt-20 lg:mt-[100px] xl:mt-[126px] sm:ml-11 sm:mr-12 gap-8 sm:gap-10 xl:gap-5">
                {box.map((boxitem, index) => (
                    <div key={index} className="flex w-full justify-center">
                        <div className=" max-w-[299px] max-h-[716px] rounded-2xl border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] py-8 px-6 duration-500 hover:-translate-y-2">
                            <p className=" text-[28px] font-semibold font-poppins text-black leading-[25px]">{boxitem.Heading}</p>
                            <p className=" text-xs font-normal leading-[18px] font-poppins teat-black max-w-[237px] pt-3">with all your customers via all conversation channels in one central dashboard.</p>
                            <p className=" text-[42px] font-semibold leading-8 font-poppins teat-black pt-7">{boxitem.Price}</p>
                            <p className=" text-sm font-light leading-[14px] font-poppins text-black pt-2">Per month</p>
                            <button className=" text-sm font-semibold leading-8 font-poppins text-black border-[2px] border-black  rounded-xl py-[9px] px-[60px] mt-8  hover:border-transparent hover:border-[2px] p-3 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:right-1/2 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">Choose this Plan</button>
                            <p className=" text-base font-bold leading-6 font-[Inter] text-[#808080] ">
                                <span className=" flex pt-8 gap-6">
                                    <Check />
                                    2GB SSD
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    10GB Bandwidth
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    15 Email Accounts
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    Unlimited Database
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    4 Subdomains
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    1 Parked Domain
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    2 Websites
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    Free SSL
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    Softaculous
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>}
            {data === "tab2" && <div className="grid sm:grid-cols-2 xl:grid-cols-3 mt-5 sm:mt-10 md:mt-20 lg:mt-[100px] xl:mt-[126px] sm:ml-11 sm:mr-12 gap-8 sm:gap-10 xl:gap-5">
                {box.map((boxitem, index) => (
                    <div key={index} className="flex w-full justify-center">
                        <div className=" max-w-[299px] max-h-[716px] duration-500 hover:-translate-y-2 rounded-2xl border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] py-8 px-6">
                            <p className=" text-[28px] font-semibold font-poppins text-black leading-[25px]">{boxitem.Heading}</p>
                            <p className=" text-xs font-normal leading-[18px] font-poppins teat-black max-w-[237px] pt-3">with all your customers via all conversation channels in one central dashboard.</p>
                            <p className=" text-[42px] font-semibold leading-8 font-poppins teat-black pt-7">{boxitem.Rate}</p>
                            <p className=" text-sm font-light leading-[14px] font-poppins text-black pt-2">Per month</p>
                            <button className=" text-sm font-semibold leading-8 font-poppins text-black border-[2px] border-black  rounded-xl py-[9px] px-[60px] mt-8  hover:border-transparent hover:border-[2px] p-3 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:right-1/2 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">Choose this Plan</button>
                            <p className=" text-base font-bold leading-6 font-[Inter] text-[#808080] ">
                                <span className=" flex pt-8 gap-6">
                                    <Check />
                                    2GB SSD
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    10GB Bandwidth
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    15 Email Accounts
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    Unlimited Database
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    4 Subdomains
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    1 Parked Domain
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    2 Websites
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    Free SSL
                                </span>
                                <span className=" flex pt-3 gap-6">
                                    <Check />
                                    Softaculous
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default Price;