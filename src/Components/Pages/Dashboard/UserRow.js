import React from "react";
import { toast } from "react-toastify";

const UserRow = ({user, index, refetch}) => {
    const {email, role} = user;

const handleMakeAdmin = () =>{
  fetch(`http://localhost:5000/user/admin/${email}`, {
    method: 'PUT', 
    headers:{
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res =>{
    if(res.status ===403){
      toast.error('Failed to make an admin');
    }
    return res.json()
  })
  .then(data =>{
    if(data.modifiedCount > 0){
      toast("successfully made an admin");
    refetch();
    }
  })

}

  return (
    <tr>
      <th>{index}</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' && <button onClick={handleMakeAdmin} className="btn btn-sm">Make Admin</button>}
      </td>
      <td>
        <button className="btn btn-sm">delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
