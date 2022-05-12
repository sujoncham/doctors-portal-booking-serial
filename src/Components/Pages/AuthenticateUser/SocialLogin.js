import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    console.log(user);
  }
  return (
    <div className="form-control mt-6">
      <button onClick={() => signInWithGoogle()} className="btn btn-primary">
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
