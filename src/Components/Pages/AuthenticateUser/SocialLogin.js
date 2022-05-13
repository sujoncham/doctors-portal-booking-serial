import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let signError;
  if (error) {
    signError = <p className="text-red-500">Error: {error?.message}</p>;
  }
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-control mt-6">
      {signError}
      <button onClick={() => signInWithGoogle()} className="btn btn-primary">
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
