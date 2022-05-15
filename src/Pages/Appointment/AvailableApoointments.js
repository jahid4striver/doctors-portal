import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceSlots from './ServiceSlots';

const AvailableApoointments = ({date}) => {
    const [services, setServices]= useState([]);
    const [treatment, setTreatment]= useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div className='my-8 px-12'>
            <h4 className='text-xl text-secondary text-center'>Available Services On {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8'>
                {
                    services.map(service=><ServiceSlots
                    key={service.id}
                    service={service}
                    setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableApoointments;