import React, { useEffect, useState } from 'react';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/doctor', {
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data =>setDoctors(data));
    }, []);

   

    return (
        <div>
            <h1 className='text-2xl'>Manage Doctors : {doctors.length}</h1>
            
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Speciality</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        doctors.map((doctor, Index) => <DoctorRow key={Index} doctor={doctor} setDoctors={setDoctors}></DoctorRow>)
                    }
                    
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default ManageDoctors;