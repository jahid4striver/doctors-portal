import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://doctors-portal-365.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status===403){
                    toast.error('You Have No Authority to Make Admin')
                }
               return res.json()})
            .then(data => {
                if(data.modifiedCount>0){
                    refetch();
                    toast.success('Admin Make Succesful')
                }
                    
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role === 'admin' ? <button className='btn btn-primary'>Admin</button> : <button onClick={makeAdmin} class="btn btn-sm">Make Admin</button>
            }</td>
            <td><button class="btn btn-sm">Delete User</button></td>
        </tr>
    );
};

export default User;