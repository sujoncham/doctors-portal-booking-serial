import React from 'react';
import SocialLinks from '../Shared/SocialLinks/SocialLinks';

const About = () => {
    return (
        <>
        <div className='text-center py-10 bg-[#eebb76]'>
            <div className='container mx-auto px-16 py-16 text-[#3b3540]'>
                <h1 className='text-5xl font-bold'>About us</h1>
                <p>Lorem ipsum dolor sit amet.</p>
           </div>
        </div>
        <div className='container mx-auto px-16 py-16'>
            <div className='text-[#3b3540]'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='w-[100%]'>
                        <img src="/images/avatar.jpg" alt="" />
                    </div>
                    <div className='w-[100%] bg-[#eebb76] px-5'>
                        <h1 className='text-5xl font-bold mb-6'>Our Mision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio repellendus iure officia iste maxime. Natus voluptatum, neque aliquam at aut obcaecati asperiores commodi! Sapiente nesciunt corporis maxime, ad error ex. Consequuntur laudantium eaque eum placeat fugiat sed provident esse aperiam ducimus necessitatibus rem dicta nihil et ipsa consectetur magni in quo, expedita ut aut maiores tempore voluptatem. Libero rem est, impedit mollitia eligendi omnis eum possimus minus ipsum sit laborum veniam eius iusto id aspernatur voluptate.</p>
                        <h1 className='text-5xl font-bold mt-6 mb-6'>Our Vission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio repellendus iure officia iste maxime. Natus voluptatum, neque aliquam at aut obcaecati asperiores commodi! Sapiente nesciunt corporis maxime, ad error ex. Consequuntur laudantium eaque eum placeat fugiat sed provident esse aperiam ducimus necessitatibus rem dicta nihil et ipsa consectetur magni in quo, expedita ut aut maiores tempore voluptatem. Libero rem est, impedit mollitia eligendi omnis eum possimus minus ipsum sit laborum veniam eius iusto id aspernatur voluptate.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row-reverse gap-10 py-24 text-[#3b3540]'>
                    <div className='w-[100%] lg:w-[50%]'>
                        <img src="/images/avatar.jpg" alt="" />
                    </div>
                    <div className='w-[100%] lg:w-[50%] bg-[#eebb76] px-5'>
                        <h1 className='text-5xl font-bold mb-6'>Our Approach</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio repellendus iure officia iste maxime. Natus voluptatum, neque aliquam at aut obcaecati asperiores commodi! Sapiente nesciunt corporis maxime, ad error ex. Consequuntur laudantium eaque eum placeat fugiat sed provident esse aperiam ducimus necessitatibus rem dicta nihil et ipsa consectetur magni in quo, expedita ut aut maiores tempore voluptatem. Libero rem est, impedit mollitia eligendi omnis eum possimus minus ipsum sit laborum veniam eius iusto id aspernatur voluptate.</p>
                        <h1 className='text-5xl font-bold mt-6 mb-6'>Our Process</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio repellendus iure officia iste maxime. Natus voluptatum, neque aliquam at aut obcaecati asperiores commodi! Sapiente nesciunt corporis maxime, ad error ex. Consequuntur laudantium eaque eum placeat fugiat sed provident esse aperiam ducimus necessitatibus rem dicta nihil et ipsa consectetur magni in quo, expedita ut aut maiores tempore voluptatem. Libero rem est, impedit mollitia eligendi omnis eum possimus minus ipsum sit laborum veniam eius iusto id aspernatur voluptate.</p>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className='py-10'>
                    <h1 className='text-5xl font-bold mb-10 text-center text-[#3b3540]'>Our Team</h1>
                    <p className='text-center'>we are united</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                    <div className='border-2 rounded-md p-2 text-center'>
                        <img className='w-60 rounded-md' src="/images/avatar.jpg" alt="" />
                        <div>
                            <h3 className='text-xl font-bold py-3 text-[#3b3540]'>Sadia Jahan Titi</h3>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className='border-2 rounded-md p-2 text-center'>
                        <img className='w-60 rounded-md' src="/images/avatar.jpg" alt="" />
                        <div>
                            <h3 className='text-xl font-bold py-3 text-[#3b3540]'>Sadia Jahan Titi</h3>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className='border-2 rounded-md p-2 text-center'>
                        <img className='w-60 rounded-md' src="/images/avatar.jpg" alt="" />
                        <div>
                            <h3 className='text-xl font-bold py-3 text-[#3b3540]'>Sadia Jahan Titi</h3>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className='border-2 rounded-md p-2 text-center'>
                        <img className='w-60 rounded-md' src="/images/avatar.jpg" alt="" />
                        <div>
                            <h3 className='text-xl font-bold py-3 text-[#3b3540]'>Sadia Jahan Titi</h3>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className='border-2 rounded-md p-2 text-center'>
                        <img className='w-60 rounded-md' src="/images/avatar.jpg" alt="" />
                        <div>
                            <h3 className='text-xl font-bold py-3 text-[#3b3540]'>Sadia Jahan Titi</h3>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;