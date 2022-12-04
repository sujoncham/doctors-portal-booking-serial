import React from 'react';

const ProductBanner = () => {
    return (
        <div className='bg-[#EAEAFF] max-w-[1440px] mx-auto overflow-hidden relative'>
            <div className='container mx-auto px-5 md:px-16 lg:px-16 xl:px-16'>
                <div className='flex flex-col md:flex-row lg:flex-row'>
                    <div className='w-[100%] md:w-[65%] lg:w-[65%] text-[#415791]'>
                        <h1 className='text-[20px] md:text-[30px] lg:text-[55px] text-[#D3D63E] mt-5 md:mt-6 lg:mt-10 uppercase font-semibold'>Turnkey</h1> 
                        <h1 className='text-[20px] md:text-[30px] lg:text-[55px] leading-none uppercase font-semibold'>Virtualization Platform</h1>
                        <h4 className='text-[16px] md:text-[20px] lg:text-[25px] py-5'>Create, manage and scale virtual <br /> workplaces and apps in one ecosystem</h4>
                        <div className='py-5 md:py-10 lg:py-10'>
                            <button className='border-2 border-[#415791] px-10 py-2 rounded-full hover:bg-[#D3D63E] hover:text-[#415791]'>Request Demo</button>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[35%] lg:w-[35%] flex md:hidden lg:hidden'>
                        <img className='w-[100%]' src="/images/banner.png" alt="" />
                    </div>
                </div>
                <div className='absolute top-0 right-0 hidden md:flex lg:flex w-80 md:w-[35%] lg:w-[35%] h-[100%]'>
                    <img className='w-[100%]' src="/images/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;