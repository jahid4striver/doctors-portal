import { sl } from 'date-fns/locale';
import React from 'react';

const ServiceSlots = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div className="card-body">
                <h2 className="card-title text-secondary mx-auto">{name}</h2>
                <p>
                    {
                        slots.length ? slots[0] : <span className='text-red-400'>Try Another Date</span>
                    }
                </p>
                <p><small>${price}</small></p>
                <p>{slots.length} {slots.length<=1 ? 'Space': 'Spaces'} Available</p>
                <div className="card-actions">
                <label onClick={()=> setTreatment(service)} disabled={slots.length<1} htmlFor="booking-modal" className="btn btn-secondary uppercase text-white mx-auto bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlots;