import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sendingEmail, errorEmail] = useSendEmailVerification(auth);

  if (error || errorEmail) {
    return <p className="text-red-500">Error: {error?.message}</p>;
  }

  if (loading || sendingEmail) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  if(!user.emailVerified){
    return <div className="flex justify-center items-center mt-28 mb-28">
    <div className="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Email is not verified</h2>
      <p>Please, verify your email address?</p>
      <div className="card-actions justify-center">
        <button
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
        className="btn btn-primary">Send Verification</button>
      </div>
    </div>
  </div>
  </div>
  }

  return children;
};

export default RequireAuth;
