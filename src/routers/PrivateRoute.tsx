import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from '@/hook/auth';

function PrivateRoute(): ReactElement {
  // const { data } = useAuth();
  const data = { isAuthenticated: false };

  if (!data.isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
