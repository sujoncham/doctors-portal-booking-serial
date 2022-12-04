import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SocialLinks = () => {
    return (
        <span className='flex justify-center items-center gap-3'>
            <Link className='bg-[#dc7672] p-2 rounded-md hover:bg-[#eebb76]' to={'/'}><FaInstagram /></Link>
            <Link className='bg-[#dc7672] p-2 rounded-md hover:bg-[#eebb76]' to={'/'}><FaTwitter /></Link>
            <Link className='bg-[#dc7672] p-2 rounded-md hover:bg-[#eebb76]' to={'/'}><FaFacebookF /></Link>
            <Link className='bg-[#dc7672] p-2 rounded-md hover:bg-[#eebb76]' to={'/'}><FaLinkedinIn /></Link>
        </span>
    );
};

export default SocialLinks;