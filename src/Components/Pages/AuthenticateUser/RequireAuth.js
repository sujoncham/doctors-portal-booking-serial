import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';


const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    
  if (error) {
    return <p className="text-red-500">Error: {error?.message}</p>;
  }
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;