import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {
   

    return (
        <div className='w-100 h-100 bg-cover bg-center py-28 px-12' style={{ backgroundImage: `url(${bg})` }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className='lg:ml-28'>
                <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                />
                </div>
                <div className='order-first lg:order-last my-8'>
                    <img src={chair} className="w-100 lg:w-3/4 mx-auto rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;