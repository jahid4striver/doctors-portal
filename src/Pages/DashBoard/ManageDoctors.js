import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import Doctor from './Doctor';

const ManageDoctors = () => {
    const [deleteModal, setDeleteModal]=useState(null);

    const {data: doctors, isLoading, refetch}= useQuery('doctors', ()=> fetch('https://doctors-portal-365.herokuapp.com/doctors',{
        headers:{
            'authorization':`bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()))

if(isLoading){
    return <Loading></Loading>
}
    return (
        <div>
            <h2 className='text-center text-2xl text-primary'>Manage Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Avator</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index)=><Doctor
                            key={doctor._id}
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                            setDeleteModal={setDeleteModal}
                            ></Doctor>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteModal && <DeleteModal setDeleteModal={setDeleteModal} deleteModal={deleteModal} refetch={refetch}></DeleteModal>
            }
        </div>
    );
};

export default ManageDoctors;