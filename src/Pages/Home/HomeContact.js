import React from 'react';
import appointment from '../../assets/images/appointment.png'

const HomeContact = () => {
    return (
        <div style={{background:`url(${appointment})`}} className='text-center p-5'>
            <h4 className='text-secondary font-bold'>Contact Us</h4>
            <h2 className='text-white text-3xl'>Stay Connected With Us</h2>
            <form className='flex flex-col justify-center items-center gap-4 my-5'>
            <input type="email" placeholder="Email Address" className="input w-full max-w-xs" />
            <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
            <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Your Message"></textarea>
            <button type='submit' className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
            </form>
        </div>
    );
};

export default HomeContact;