import React from 'react';

const HowItWorks = () => {
    return (
        <>
        <div className='container mx-auto px-5 md:px-16 lg:px-16 xl:px-16 py-16'>
            <div className='mb-10'>
                <h1 className='text-[#1A2026] text-[20px] md:text-[20px] lg:text-[25px] font-bold uppercase'>HOW IT WORKS</h1>
                <div className='bg-[#D3D63E] h-[3px] w-[50px]'></div>
            </div>
            <div className='text-[#1A2026]'>
                <p className='text-[25px] py-5'>SOFTKLIX helps you to create and manage high-performance browser-based digital workplaces based on Windows OS using cloud/on-premises servers or even desktops.</p>
                <p className='text-[25px]'>Your end users log into the same workspace via any web browser with full access to all necessary files and applications. It enables remote work and online study from anywhere and on any (even low-performing) device.</p>
            </div>
        </div>
        <div className='max-w-[1440px] mx-auto relative mb-16'>
            <div className='container mx-auto px-5 md:px-16 lg:px-16 xl:px-16'>
                <div className='flex flex-col md:flex-row lg:flex-row'>
                    <div className='w-[100%] md:w-[50%] lg:w-[50%] text-[#1A2026]'>
                        <p className='text-[25px]'>SOFTKLIX platform is also equipped with Orchestration and Productivity tools, which streamline the administration process and lower Total Cost of Ownership.</p>
                        <div className='py-5 md:py-10 lg:py-10'>
                            <button className='border-2 px-10 py-2 rounded-full hover:bg-[#D3D63E] hover:text-[#415791]'>Request Demo</button>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%] lg:w-[50%] z-50'>
                        <img className='w-[100%] hidden md:flex lg:flex' src="/images/tvscreen.png" alt="" />
                        <img className='w-[100%] flex md:hidden lg:hidden' src="/images/how-work.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='absolute top-[-50px] z-10 right-0'>
                <img className='w-[100%] hidden md:flex lg:flex' src="/images/tv-bg.png" alt="" />
            </div>
        </div>
    </>
    );
};

export default HowItWorks;