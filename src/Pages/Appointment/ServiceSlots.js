import { sl } from 'date-fns/locale';
import React from 'react';

const ServiceSlots = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div class="card-body">
                <h2 class="card-title text-secondary mx-auto">{name}</h2>
                <p>
                    {
                        slots.length ? slots[0] : 'No Slots Available'
                    }
                </p>
                <div class="card-actions">
                    <button disabled={slots.length<1} class="btn btn-secondary uppercase text-white mx-auto">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlots;