import { Navigate, Outlet } from "react-router-dom"
function ProtectRoute() {
    const isAuthuntication = !sessionStorage.getItem("token")
    return isAuthuntication ? <Outlet /> : <Navigate to='login' />
}
export default ProtectRoute