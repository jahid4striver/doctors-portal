import React from 'react';
import { toast } from 'react-toastify';

const Doctor = ({ doctor, index, refetch, setDeleteModal }) => {
    const { name, email, image, speciality } = doctor;


    
    return (
        <tr>
            <th>{index + 1}</th>
            <th><div class="avatar">
                <div class="w-24 mask mask-hexagon">
                    <img src={image} alt='doctor'/>
                </div>
            </div></th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{speciality}</td>
            <td>
            <label onClick={()=>setDeleteModal(doctor)} for="delete-modal" class="btn modal-button">Delete</label>
                </td>
        </tr>
    );
};

export default Doctor;

//^8(Zmtp,pCMkkKG12