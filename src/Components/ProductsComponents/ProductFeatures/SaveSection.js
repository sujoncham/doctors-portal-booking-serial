import React from 'react';

const SaveSection = () => {
    return (
        <div className='bg-[#415791] py-16'>
            <div className='container mx-auto px-5 md:px-16 lg:px-16 xl:px-16'>
                
                <div className='py-5'>
                    <h1 className='text-[#fff] text-[20px] md:text-[20px] lg:text-[25px] font-bold uppercase'>Save Money on</h1>
                    <div className='bg-[#D3D63E] h-[3px] w-[50px]'></div>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row items-center gap-5'>
                    <div className='w-[100%] md:w-[50%] lg:w-[50%] text-white'>
                        <p className='text-[16px] md:text-[16px] lg:text-[26px]'>SOFTKLIX allows you to cut in half Total Cost of Ownership (TCO) comparing with the leading VDI solutions due to the savings on licensing and cloud computing. Moreover, you get a unique set of orchestration tools to ensure smooth performance of your remote workplaces and virtual apps.</p>
                    </div>
                    <div className='w-[100%] md:w-[50%] lg:w-[50%]'>
                        <img className='w-[100%]' src="/images/save-money.png" alt="" />
                    </div>
                </div>
              
            
            </div>
        </div>
    );
};

export default SaveSection;