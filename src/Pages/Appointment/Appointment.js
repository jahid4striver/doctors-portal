import { set } from 'date-fns';
import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableApoointments from './AvailableApoointments';

const Appointment = () => {
    const [date, setDate]= useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableApoointments date={date} setDate={setDate}></AvailableApoointments>
        </div>
    );
};

export default Appointment;