import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('https://doctors-portal-365.herokuapp.com/services').then(res => res.json()));

if(isLoading){
    return <Loading></Loading>
}

/**
 * 3 Ways to store images
 * 1. 3rd party storage // free open public storage is ok for practice project
 * 2. your own storage in your own server (file system)
 * 3. database: mongodb
 * 
 * YUP: to validate file: search yup file vali for react hook form
*/

const imageApiKey='73788e34c0735f097d12ee5f939e4838';


    const onSubmit = async data => {
        const image= data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url= `https://api.imgbb.com/1/upload?key=${imageApiKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(result=>{
            if(result.success){
                const img= result.data.url;
                const doctor={
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    image: img
                }
            // send to your database
            fetch('https://doctors-portal-365.herokuapp.com/doctors', {
                method:'POST',
                headers:{
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res=> res.json())
            .then(inserted=>{
                if(inserted.insertedId){
                    toast.success('Doctor Added Successful')
                    reset();
                }else{
                    toast.error('Doctor Added Failed')
                }
            })


            }
        })

    };

    return (
        <div>
            <h1 className="text-2xl text-primary text-center">Add A New Doctor</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="">

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })} type="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Please Provide a Valid Email'
                        }
                    })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register('speciality')} class="select select-bordered w-full max-w-xs">
                        {
                            services.map(service=><option key={service._id} value={service.name}>{service.name}</option>)
                        }
                    </select>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        }
                    })} type="file" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <input className='btn text-white w-full max-w-xs' value="Add" type="submit" />
            </form >
        </div >
    );
};

export default AddDoctor;