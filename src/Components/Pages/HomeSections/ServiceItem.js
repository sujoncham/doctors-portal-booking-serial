import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import InnerService from './InnerService';

const ServiceItem = () => {

    const serviceData = [
        {id:1, title:'Fluoride Treatment', para: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img:fluoride},
        {id:2, title:'Cavity Filling', para: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img:cavity},
        {id:3, title:'Teeth whitening', para: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img:whitening},
    ]

    return (
        <div className='justify-center items-center px-20'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold uppercase'>Our Services</h1>
                <p>We provide services</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 d-flex justify-center items-center'>
            {
                serviceData.map(data => <InnerService key={data.id} data={data}></InnerService>)
            }
            </div>
                
        </div>
    );
};

export default ServiceItem;