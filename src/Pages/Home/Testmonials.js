import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import Reviews from './Reviews';

const Testmonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people1,
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people1,
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
    return (
        <section className='my-20 px-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl text-secondary font-bold'>Testmonial</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  my-20'>
                {
                    reviews.map(review=><Reviews
                    key={review._id}
                    review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testmonials;