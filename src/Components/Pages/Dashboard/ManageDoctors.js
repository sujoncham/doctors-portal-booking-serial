import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
 
    const { data: doctors, isLoading, refetch } = useQuery(['doctors'], () =>
    fetch('https://doctors-portal-server-81lp.onrender.com/doctor', {
        method: "GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json()));

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }


    return (
        <div>
            <h1 className='text-2xl'>Manage Doctors : {doctors.length}</h1>
            
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                        doctors.map((doctor, index) => <DoctorRow 
                        key={doctor._id} 
                        index={index} 
                        doctor={doctor} 
                        refetch={refetch}
                        ></DoctorRow>)
                    }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;