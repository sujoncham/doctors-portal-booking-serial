import React from "react";

const UserRow = ({user}) => {
    const {email} =user;
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        <button className="btn btn-sm">Make Admin</button>{" "}
      </td>
      <td>
        {" "}
        <button className="btn btn-sm">delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
