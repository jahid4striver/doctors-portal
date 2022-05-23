import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L2ITWF2gM93aLaHCSf2MlzDRCW199moGnAndqvILc36H198PO1iTNzmebT5ttypjlJESLoo6y34TYvqH0mbVTOM00onLFnkQC');

const Payment = () => {
    const { id } = useParams();
    const url = `https://doctors-portal-365.herokuapp.com/${id}`

    const { data: booking, isLoading, refetch } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // const { serviceName, slot, bookingDate, price, patientName } = booking;

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div class="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {booking.patientName}</p>
                    <h2 class="card-title">Please Pay For Your {booking.serviceName}</h2>
                    <p>We Will see you at {booking.slot} in {booking.bookingDate}</p>
                    <p className='text-warning'>Please Pay ${booking.price}</p>
                </div>
                <div class="card-body mt-8">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;