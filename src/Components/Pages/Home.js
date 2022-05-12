import React from 'react';
import Banner from './HomeSections/Banner';
import DentalCare from './HomeSections/DentalCare';
import InfoBox from './HomeSections/InfoBox';
import MakeAppoint from './HomeSections/MakeAppoint';
import ServiceItem from './HomeSections/ServiceItem';
import Testimonial from './HomeSections/Testimonial';


const Home = () => {
    return (
        <div className="home-container">
            <Banner></Banner>
            <InfoBox></InfoBox>
            <ServiceItem></ServiceItem>
            <DentalCare></DentalCare>
            <MakeAppoint></MakeAppoint>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;