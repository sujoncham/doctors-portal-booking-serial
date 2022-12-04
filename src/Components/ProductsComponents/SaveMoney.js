import React from 'react';

const SaveMoney = () => {
    return (
        <div className='container mx-auto px-5 md:px-16 lg:px-16 xl:px-16 py-16'>
            <div className='mb-10'>
                <h1 className='text-[#1A2026] text-[20px] md:text-[20px] lg:text-[25px] font-bold uppercase'>Save Money On</h1>
                <div className='bg-[#D3D63E] h-[3px] w-[50px]'></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='border-dashed border-2 border-[#415791] shadow-xl rounded-xl flex flex-col items-center w-[100%] h-[450px] px-5 py-10 text-center'>
                    <img className='w-[50%]' src="/images/icon1.png" alt="" />
                    <h1 className='text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] font-bold text-[#415791] uppercase'>Hardware updates</h1>
                    <p className='mt-5 text-[#1A2026] text-[25px]'>Reuse existing endpoint devices for more challenging tasks</p>
                </div>
                <div className='border-dashed border-2 border-[#415791] shadow-xl rounded-xl flex flex-col items-center w-[100%] h-[450px] px-5 py-10 text-center'>
                    <img className='w-[50%]' src="/images/icon2.png" alt="" />
                    <h1 className='text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] font-bold text-[#415791] uppercase'>Training & Consulting</h1>
                    <p className='mt-5 text-[#1A2026] text-[25px]'>Get any help you need free of charge, no ties to expensive service contracts</p>
                </div>
                <div className='border-dashed border-2 border-[#415791] shadow-xl rounded-xl flex flex-col items-center w-[100%] h-[450px] px-5 py-10 text-center'>
                    <img className='w-[50%]' src="/images/icon3.png" alt="" />
                    <h1 className='text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] font-bold text-[#415791] uppercase'>Admin & Support Staff</h1>
                    <p className='mt-5 text-[#1A2026] text-[25px]'>Our product is highly intuitive and easy to use </p>
                </div>
                <div className='border-dashed border-2 border-[#415791] shadow-xl rounded-xl flex flex-col items-center w-[100%] h-[450px] px-5 py-10 text-center'>
                    <img className='w-[50%]' src="/images/icon4.png" alt="" />
                    <h1 className='text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] font-bold text-[#415791] uppercase'>Obligatory 365 Licences</h1>
                    <p className='mt-5 text-[#1A2026] text-[25px]'>Enjoy our FREEOFFICE tools for typical office tasks</p>
                </div>
            </div>
        </div>
    );
};

export default SaveMoney;