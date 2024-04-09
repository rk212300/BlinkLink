import { Navigate, Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

export default function PrivateRoute() {
    const currentUser = true;
    return (
        <div className="flex max-h-screen overflow-hidden">
            <div className="w-[15%] overflow-y-auto border-r border-gray-300 relative">
                <Sidebar />
            </div>
            <div className="w-[85%] overflow-y-auto min-h-screen h-screen bg-[#f4f6fa]">
                {currentUser ? <Outlet /> : <Navigate to="/sign-in" />}
            </div>
        </div>
    );
}
