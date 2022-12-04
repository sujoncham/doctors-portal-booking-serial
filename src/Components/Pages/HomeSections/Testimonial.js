import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const Testimonial = () => {

    const testimonial =[
        {id:1, name:'Willson Herry', para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea iusto debitis sapiente beatae repellat et itaque voluptatem. Obcaecati necessitatibus, magnam voluptate blanditiis ea esse.', address:'California', img:people1},
        {id:2, name:'Helena Jane', para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea iusto debitis sapiente beatae repellat et itaque voluptatem. Obcaecati necessitatibus, magnam voluptate blanditiis ea esse.', address:'Machigan', img:people2},
        {id:3, name:'Margerate Caty', para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea iusto debitis sapiente beatae repellat et itaque voluptatem. Obcaecati necessitatibus, magnam voluptate blanditiis ea esse.', address:'Indiana', img:people3},
    ]

    return (
        <section className='mb-20 px-20 py-16'>
            <div className='flex justify-between items-center mb-10'>
                <div className='test-title'>
                    <h2>Testimonial</h2>
                    <p className='text-4xl'>What Our Patients Says</p>
                </div>
                <div className='p-1'>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    testimonial.map(testi => <div key={testi.id} testi={testi} className="p-5">
                        <div className='flex gap-2'>
                            <FaStar color='#f80' />
                            <FaStar color='#f80' />
                            <FaStar color='#f80' />
                            <FaStar color='#f80' />
                            <FaStarHalfAlt color='#f80' />
                        </div>
                        <p>{testi.para}</p>
                        <div className='flex justify-center items-center mx-auto'>
                            <img className='w-14 h-14' src={testi.img} alt="Movie" />
                            <div className="card-body">
                                <h2 className="card-title">{testi.name}</h2>
                                <p>{testi.address}</p>
                            </div>
                        </div>
                  </div>)
                }
            </div>
        </section>
    );
};

export default Testimonial;