import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, Index, setDoctors }) => {
  const { name, email, speciality, img } = doctor;

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          toast(`Doctor: ${name} is delete`);
          setDoctors('');
        }
      });
  };
  return (
    <tr>
      <th>{Index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
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
