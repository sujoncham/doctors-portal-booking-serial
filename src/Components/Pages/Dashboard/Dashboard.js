import React from "react";
import { Link, Outlet } from "react-router-dom";
// import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
  // const [user] = useAuthState(auth);
  // const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-4xl font-bold text-purple-500">Welcome to Dashboard</h2>
        <Outlet></Outlet>
       
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/myReviews">My Reviews</Link></li>
          <li><Link to="/dashboard/myHistory">My History</Link></li>
          {/* { admin && <>  */}
          <li><Link to="/dashboard/users">All Users</Link></li>
          <li><Link to="/dashboard/addDoctor">Add Doctor</Link></li>
          <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
          {/* </>} */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
