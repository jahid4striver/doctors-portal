import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;

    const handleTreatment= (e)=>{
        e.preventDefault();
        const slot= e.target.slot.value;
        console.log(slot, name,);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-secondary text-center">Booking For: {name}</h3>
                    <form onSubmit={handleTreatment} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot=><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Your Phone No" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;