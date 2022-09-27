import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

const MyAppointment = () => {
  
  const [user] = useAuthState(auth);
  const [patients, setPatients] = useState([]);


  const navigate = useNavigate();
  useEffect(() => {
    if(user){
        fetch(`https://doctors-portal-server-7ten.vercel.app/booking?patient=${user?.email}`, {
            method: 'GET',
            headers:{
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
      .then((res) => {
          if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken');
                navigate('/');
          } 
          return res.json()
        })
      .then((data) => {
          setPatients(data)
        });
    }
  }, [user, navigate]);
  
  return (
    <div className="overflow-x-auto mb-20 mt-10">
        <h1 className="text-2xl">My appointment : {patients.length}</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#Sl.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Service</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={patient._id}>
              <th>{index + 1}</th>
              <td>{patient.patientName}</td>
              <td>{patient.patient}</td>
              <td>{patient.date}</td>
              <td>{patient.slot}</td>
              <td>{patient.treatment}</td>
              <td>
                {(patient.price && !patient.paid) && <Link className="btn btn-primary" to={`/dashboard/payment/${patient._id}`}>Pay</Link>}
                {(patient.price && patient.paid) && <>
                  <p className="text-success">paid</p>
                  <p className="text-success">({patient.transactionId.slice(-4)})</p>
                </>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
