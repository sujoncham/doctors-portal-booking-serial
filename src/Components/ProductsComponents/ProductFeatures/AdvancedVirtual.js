import React from 'react';
const virtuals = [
    {
        id:1,
        type:"Advanced Virtualization",
        services: [
            {
                title: "Create virtual workplaces based on any device or server with Windows OS",
                img: "/images/icon1.png",
            },
            {
                title: "Turn Windows applications into SaaS available by browser",
                img: "/images/icon2.png",
            },
            {
                title: "Provide DaaS offering to your clients",
                img: "/images/icon3.png",
            },
        ],
    
        featText: [
            {feature: "Complementary with any infrastructure: Azure, AWS, Alibaba Cloud, VMware, Citrix, and all Microsoft-based products. Fully compatible with popular VM/KVM Hypervisors."},
            {feature: "Multi-Cloud support"},
            {feature: "Services to manage RDSH instances and sessions"},
           
        ],
        feature:"/images/virtual.png",
        icon: "/images/icon.png"
    },
]

const AdvancedVirtual = () => {
    
    return (
        <>
            {virtuals.map(feature =><div key={feature.id}>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 py-10'>
                    {feature?.services?.map((service)=><div key={service.id} className='px-10 py-5 border-2 shadow-lg bg-[#fff] rounded-lg'>
                        <img src={service.img} className="w-[30%] rounded-lg shadow-2xl" alt='' />
                        <h1 className='text-[25px]'>{service.title}</h1> 
                    </div>)}

                </div>
                <h1 className='text-3xl font-bold py-10 uppercase'>Features</h1>
                <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
                    <div className='w-[100%] md:w-[40%] lg:w-[30%]'>
                    { feature.featText.map((title, index) =><div index={index} className='flex gap-2 my-2'>
                            <img src={feature.icon} className="w-[30px] h-[30px] rounded-lg shadow-2xl" alt='' />
                            <h2>{title.feature}</h2>
                        </div>)}
                    </div>
                    <div className='w-[100%] md:w-[60%] lg:w-[70%]'>
                        <img src={feature.feature} className="w-[100%] rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>
              </div>)}
        </>
    );
};

export default AdvancedVirtual;