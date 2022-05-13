import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard bgClass='bg-accent' cardTitle='Visit Our Place' img={marker}></InfoCard>
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact With Us' img={phone}></InfoCard>
        </div>
    );
};

export default Info;