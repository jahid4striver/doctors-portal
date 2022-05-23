import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://doctors-portal-365.herokuapp.com/booking?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/');
                }
               return res.json()
            })
            .then(data => {
                setAppointments(data)
            })
    }, [user, navigate])

    return (
        <div>
            <h2 className='text-center'>Your Total Appointments: </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Booking Date</th>
                            <th>Time</th>
                            <th>Service Name</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.bookingDate}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.serviceName}</td>
                                    {
                                      (a.price && !a.paid) &&  <td><Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link></td>
                                    }
                                    {
                                      (a.price && a.paid) &&  <td><button className='btn-sm btn-success'>Paid</button>
                                      <br />
                                     <input type='text' defaultValue={a.transactionId} className='btn btn-sm btn-warning'/>
                                      </td>
                                    }
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;