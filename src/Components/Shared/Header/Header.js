import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const myMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
        
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      { user && <li>
        <Link to="/dashboard">DashBoard</Link>
      </li>
      }
      {user?.displayName && (
        <li className="text-red-500 mt-3">{user?.displayName.slice(0,6)}</li>
      )}
      {user ? (
        <li>
          <button className="btn btn-link" onClick={handleSignOut}>
            SignOut
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            {myMenu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctor's Portal
        </Link>
      </div>
      
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{myMenu}</ul>
      </div>
      
      <div className="navbar-end">
        <label htmlFor="my-drawer" tabIndex="1" className="btn btn-primary drawer-button lg:hidden" > 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"  viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
