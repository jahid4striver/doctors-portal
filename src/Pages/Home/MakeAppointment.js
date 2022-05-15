import React from 'react';
import doctorsmall from '../../assets/images/doctorsmall.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='w-full grid lg:grid-cols-2 justify-center items-center'>
            <div>
                <img style={{marginTop: '-100px'}} className='hidden lg:block' src={doctorsmall} alt="" />
            </div>
            <div className='p-4'>
            <h3 className='text-secondary font-bold'>Appointment</h3>
            <h2 className='text-4xl text-white'>Make a Appointment Today</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam nobis saepe voluptas asperiores consequuntur atque qui tenetur reiciendis, aperiam illo. Repellendus atque obcaecati exercitationem cupiditate consequuntur accusantium labore adipisci? Commodi obcaecati quas est ipsum blanditiis corrupti exercitationem mollitia voluptates.</p>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;