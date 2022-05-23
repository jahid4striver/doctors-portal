import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteModal, refetch,setDeleteModal }) => {
    const {name, email}=deleteModal;

    const handleDelete= (email)=>{
        const url=`http://localhost:5000/doctors/${email}`
        fetch(url, {
            method: 'DELETE',
            headers:{
                'authorization':`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount){
                refetch();
                toast(`Doctor ${name} Deleted`)
                setDeleteModal(null)
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600 text-center">{`Are You Sure Want To Delete ${name}`}</h3>
                    <p class="py-4">After Delete You Can't Restore It.</p>
                    <div class="modal-action">
                    <button onClick={()=>handleDelete(email)} class="btn btn-error">Delete</button>
                        <label for="delete-modal" class="btn">Cencel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;