import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../Shared/LoadingSpinner';



const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {data:services, isLoading} = useQuery(['services'], ()=>fetch('https://doctors-portal-server-81lp.onrender.com/service').then(res=>res.json()));
    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    const imageStorageKey='0a88ddefc27d62bd7063e3b8adb8b307';

    const onSubmit = async (data)=>{
        
        const image = data.image[0];
        
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body:formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){ 
                const img = result.data.url;
                const doctor = {
                    name:data.name,
                    email:data.email,
                    speciality: data.speciality,
                    img:img
                }

                fetch('https://doctors-portal-server-81lp.onrender.com/doctor', {
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('doctor added successfully');
                        reset();
                    }
                })

            }
           
        })

    }

    return (
        <div className='mb-20 card-body'>
            <h1 className='text-2xl text-center text-accent mt-10'>Add Doctor</h1>
            <div className='mt-10 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  }
                })}
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                autoComplete='off'
              />
              {errors.name?.type === "required" && <span className="text-red-500">{errors.name?.message}</span>}
             
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  }
                })}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                autoComplete='off'
              />
              {errors.email?.type === "required" && <span className="text-red-500">{errors.email?.message}</span>}
             
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Speciality</span>
              </label>

              <select {...register('speciality')} className="select w-full max-w-xs input-bordered">
               
                {
                    services.map(service=><option key={service._id} value={service.title}>{service.title}</option>)
                }
            </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required",
                  }
                })}
                type="file"
                name="image"
                className="input input-bordered"
                
              />
              {errors.image?.type === "required" && <span className="text-red-500">{errors.image?.message}</span>}
          
            </div>


            <div className="form-control mt-6 w-full max-w-xs">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          
          </form>
            </div>
        </div>
    );
};

export default AddDoctor;