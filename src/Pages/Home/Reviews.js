import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.description}</p>
                <div className='flex items-center'>
                    <div class="">
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} alt='' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <h5>{review.location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;