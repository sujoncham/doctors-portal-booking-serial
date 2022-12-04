import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, email, speciality, img } = doctor;

  const handleDelete = (email) => {
    const confirmDelete = window.confirm('Are you want to delete this doctor?');
    if(confirmDelete){
      fetch(`https://doctors-portal-server-81lp.onrender.com/doctor/${email}`, {
      method: "DELETE",
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          toast(`Doctor: ${name} is delete`);
          refetch();
        }
      });
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt={doctor.name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{speciality}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-primary"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
