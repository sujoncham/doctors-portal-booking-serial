import React from 'react';
import Features from '../ProductsComponents/Features';
import HowItWorks from '../ProductsComponents/HowItWorks';
import ProductBanner from '../ProductsComponents/ProductBanner';
import SaveSection from '../ProductsComponents/ProductFeatures/SaveSection';
import SaveMoney from '../ProductsComponents/SaveMoney';

const Reviews = () => {
    return (
        <>
        <ProductBanner />
        <HowItWorks />
        <SaveMoney />
        <Features />
        <SaveSection />
        </>
    );
};

export default Reviews;