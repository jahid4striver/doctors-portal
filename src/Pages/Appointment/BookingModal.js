import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const {_id, name, slots } = treatment;
    const [user]= useAuthState(auth)
    
    const formatedDate= format(date, 'PP');

    const handleTreatment= (e)=>{
        e.preventDefault();
        const slot= e.target.slot.value;
        
        const bookingData= {
            bookingId: _id,
            serviceName: name,
            bookingDate:formatedDate,
            slot,
            patientName:user.displayName,
            email: user.email,
            phone: e.target.phone.value


        }

        fetch('https://doctors-portal-365.herokuapp.com/booking',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.success){
                toast(`Appointment Successful at ${formatedDate}, ${slot}`);
            }else{
                toast.error(`Sorry You Already have Appointment on ${data?.booking?.bookingDate}, ${data?.booking?.slot}`);
            }
            refetch();
            setTreatment(null)
        })

        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary text-center">Booking For: {name}</h3>
                    <form onSubmit={handleTreatment} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot=><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="name" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Your Phone No" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;