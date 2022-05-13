import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services=[
        {
            _id:1,
            name: 'Fluoride Treatment',
            img:fluoride,
            description: ''
        },
        {
            _id:1,
            name: 'Cavity Filling',
            img:cavity,
            description: ''
        },
        {
            _id:1,
            name: 'Teeth Whitening',
            img:whitening,
            description: ''
        },
    ]
    return (
        <div>
            <div className='my-24 text-center'>
                <h3 className='text-primary font-bold uppercase text-xl'>Our Services</h3>
                <h2 className='text-3xl'>Service We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service=> <Service
                    key={service._id}
                    service={service}
                    />)
                }
            </div>
            
        </div>
    );
};

export default Services;