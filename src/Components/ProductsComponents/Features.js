import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Features = () => {
    const [openTab, setOpenTab] = useState(1)
    

    return (
        <div className='bg-[#F6F6FF]'>
            <div className='container mx-auto px-5 md:px-16 lg:px-16 xl:px-16 py-16'>
                <div className="bg-[#EAEAFF] border-2 border-[#415791] py-3 rounded-xl lg:rounded-full">
                    <ul className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                        <li onClick={() => setOpenTab(1)}>
                            <Link to='/reviews/advancedVirtual' className={` ${openTab === 1 ? "bg-[#415791] px- py-3 text-[#fff]" : " text-[#415791]"} px-2 py-3 text-[10px] lg:text-[20px] rounded-full uppercase`} >Advanced Virtualization</Link>
                        </li>
                        <li onClick={() => setOpenTab(2)}>
                            <Link to='/reviews/uniqueOrchestra' className={` ${openTab === 2 ? "bg-[#415791] px-2 py-3 text-[#fff]" : " text-[#415791]"} px-3 py-3 text-[10px] lg:text-[20px] rounded-full uppercase`} >Unique Orchestration</Link>
                        </li>
                        <li onClick={() => setOpenTab(3)}>
                            <Link to='/reviews/remoteProduct' className={` ${openTab === 3 ? "bg-[#415791] px-2 py-3 text-[#fff]" : " text-[#415791]"} px-2 py-3 text-[10px] lg:text-[20px] rounded-full uppercase`} >Remote productivity</Link>
                        </li>
                    </ul>
                </div>
                <div className='text-[#1A2026]'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Features;