import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const AllUsers = () => {
    const {data:users, isLoading, refetch}= useQuery('users',()=>fetch('https://doctors-portal-365.herokuapp.com/users',{
        method: 'GET',
        headers:{
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-primary font-bold text-3xl text-center my-8'>All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>User Email</th>
                            <th>Authority</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=><User
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                            ></User>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;