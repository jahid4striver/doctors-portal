import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className='w-100 h-100 bg-cover bg-center py-28 px-12' style={{ backgroundImage: `url(${bg})` }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
                <div className='order-first lg:order-last my-8'>
                    <img src={chair} className="w-100 lg:w-3/4 mx-auto rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;