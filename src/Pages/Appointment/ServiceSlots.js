import { sl } from 'date-fns/locale';
import React from 'react';

const ServiceSlots = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div class="card-body">
                <h2 class="card-title text-secondary mx-auto">{name}</h2>
                <p>
                    {
                        slots.length ? slots[0] : <span className='text-red-400'>Try Another Date</span>
                    }
                </p>
                <p>{slots.length} {slots.length<=1 ? 'Space': 'Spaces'} Available</p>
                <div class="card-actions">
                <label onClick={()=> setTreatment(service)} disabled={slots.length<1} for="booking-modal" class="btn btn-secondary uppercase text-white mx-auto">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlots;