import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto'>
            <div className='py-20 text-center'>
                <h1 className='text-5xl'>About page</h1>
            </div>
            <div className='mt-10 mb-10 flex justify-center'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mb-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;