import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Treatment = () => {
    return (
            <div className="grid grid-cols-1 lg:grid-cols-2 my-28 px-12">
                <div className='my-8 flex flex-col justify-center items-center lg:mr-20'>
                    <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
                <div className='order-first lg:order-first my-8'>
                    <img src={treatment} className="w-100 lg:w-3/4 mx-auto rounded-lg shadow-2xl" />
                </div>
            </div>
    );
};

export default Treatment;