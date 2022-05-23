import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [proccessing, setProccessing] = useState(false);
    const [payid, setPayid] = useState('');

    const {_id, price, email, patientName } = booking;

    useEffect(() => {
        fetch('https://doctors-portal-365.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                } else {

                }
            })
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        const card = elements.getElement(CardElement)


        if (!stripe || !elements) {
            return;
        }

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '');
        setSuccess('')
        setProccessing(true);

        // confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProccessing(false)

        } else {
            setCardError('');
            setPayid(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('Congrats !, Your Payment is Successful')

// crete payment object for database
            const payment={
                booking: _id,
                transactionId: paymentIntent.id
            }

            fetch(`https://doctors-portal-365.herokuapp.com/booking/${_id}`,{
                method:'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                setProccessing(false);
                console.log(data);

            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    cardError ? <p className='mt-2 text-red-600 font-bold'>{cardError}</p> : ''
                }
                {
                    success ? <p className='mt-2 text-green-600 font-bold'>{success} <br />
                        <span className='text-orange-500'>Your Transaction Id: {payid}</span></p> : ''
                }
            </form>
        </>
    );
};

export default CheckoutForm;