// import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";
// import { RootState } from "../store";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/login",
}) => {
  //   const { token } = useSelector((state: RootState) => state.auth);
  const token = sessionStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <Outlet />; // Render nested routes
};

export default ProtectedRoute;
