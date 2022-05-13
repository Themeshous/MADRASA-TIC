import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  
    
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        (user?.roles)&&(allowedRoles?.includes(user.roles))
            ? <Outlet />
              
               
            :!(allowedRoles?.includes(user.roles)) 
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/auth/Connect" state={{ from: location }} replace />
    );
}

export default RequireAuth;