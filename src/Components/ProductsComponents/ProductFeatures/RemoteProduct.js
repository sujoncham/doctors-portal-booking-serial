import React from 'react';
const remotes = [
   
    {
        id:1,
        type:"Remote productivity",
        services: [
        {
            id:1,
            title: "Deliver workstation-level performance and scale easily depending on app requirements",
            img: "/images/icon1.png",
        },
        {
            id:2,
            title: "Access from any remote devices via browser on any endpoint device (BYOD)",
            img: "/images/icon2.png",
        },
        {
            id:3,
            title: "Host and share any apps (SaaS, legacy, CAD or development tools) and files",
            img: "/images/icon3.png",
        },
        {
            id:4,
            title: "Get free office tools compatible with MS Office/365 ecosystem: DOCX, XLXX, and PPTX files",
            img: "/images/icon3.png",
        },
        {
            id:5,
            title: "Ensure safe remote work",
        img: "/images/icon3.png",
    }
    ],
        featText: [
            {feature: "Encrypted HTML5 Gateway Server communication, central web-based access client, and gateway authentication"},
            {feature: "Browser based recording"},
            {feature: "Integrated mail client to connect to administrator"},
            {feature: "Remote high-resolution print without drivers installation"},
            {feature: "Single sign-on/Login"},
            {feature: "Browser based Multi-Monitor Support"},
            {feature: "OEM-customization (CI)"},
        ],
        
        feature:"/images/remote.png", 
        icon: "/images/icon.png"
    },
]

const RemoteProduct = () => {
    return (
        <>
            {remotes.map(feature =><div key={feature.id}>
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

export default RemoteProduct;