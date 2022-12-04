import React from 'react';
const images = [
   
    {
        id:1,
        type:"Unique Orchestration",
        title1: "Create virtual workplaces based on any device or server with Windows OS",
        title2: "Turn Windows applications into SaaS available by browser ",
        title3: "Provide DaaS offering to your clients ",
        img1: "/images/icon1.png",
        img2: "/images/icon2.png",
        img3: "/images/icon3.png",
        services: [
            {
                title: "Monitor user's activity and apps on a daily basis ",
                img: "/images/icon1.png",
            },
            {
                title: "Get immediate notifications on issues in your RDS department ",
                img: "/images/icon2.png",
            },
            {
                title: "Manage multiple clients at once via SOFTKLIX multi-tenant support ",
                img: "/images/icon3.png",
            },
            {
                title: "Easily manage all virtual servers and assets (users, groups, apps, servers, providers, tenants, and more) via an intuitive self-service web-based portal",
                img: "/images/icon3.png",
            },
            {
                title: "Reduce downtime with load-balanced application pools over multiple clustered servers",
                img: "/images/icon3.png",
            },
        ],
        featText: [
            {feature: "Complementary with any infrastructure: Azure, AWS, Alibaba Cloud, VMware, Citrix, and all Microsoft-based products. Fully compatible with popular VM/KVM Hypervisors."},
            {feature: "Multi-Cloud support"},
            {feature: "Services to manage RDSH instances and sessions"},
        ],
        feature:"/images/unique.png",
        icon: "/images/icon.png"
    },
]

const UniqueOrchestra = () => {
    return (
        <>
            {images.map(feature =><div>
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

export default UniqueOrchestra;