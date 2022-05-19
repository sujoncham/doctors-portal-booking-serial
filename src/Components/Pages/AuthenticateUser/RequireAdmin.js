import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const RequireAdmin = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
      return <LoadingSpinner></LoadingSpinner>;
    }
  
    if (!user || !admin) {
        signOut(auth);
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

    return children;
};

export default RequireAdmin;