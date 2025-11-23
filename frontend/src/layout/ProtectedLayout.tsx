import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar/Sidebar";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function ProtectedLayout() {
    const { user } = useContext(UserContext)!;

    if (!user)
        return <Navigate to="/" />;

    return (
        <>
            <div style={{ display: "flex", width: "100%", height: "100%" }}>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
}