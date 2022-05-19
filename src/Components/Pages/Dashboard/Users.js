import React from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () =>
    fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json()));

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="overflow-x-auto mb-20 mt-10">
      <h1 className="text-2xl">My appointment</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#Sl.</th>
            <th>Email</th>
            <th>User Roles</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => <UserRow key={index} user={user} refetch={refetch}></UserRow> )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
