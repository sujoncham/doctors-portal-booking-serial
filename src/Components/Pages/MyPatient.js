import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const MyPatient = () => {
    const [user] = useAuthState(auth);

    const { data: doctor, isLoading } = useQuery(['doctor'], () =>
    fetch(`https://doctors-portal-server-7ten.vercel.app/doctor?docotr=${user?.email}`, {
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
            <h1>{doctor.name}</h1>
        </div>
    );
};

export default MyPatient;