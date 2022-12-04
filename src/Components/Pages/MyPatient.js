import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const MyPatient = () => {
    const [user] = useAuthState(auth);

    const { data: doctors, isLoading } = useQuery(['doctors'], () =>
    fetch(`https://doctors-portal-server-81lp.onrender.com/doctor?docotr=${user?.email}`, {
        method: "GET",
        headers:{
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json()));

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }


    return (
        <div>
           
            {
              doctors && doctors.map(doctor => <h1>{doctor.name}</h1>)
            }
        </div>
    );
};

export default MyPatient;