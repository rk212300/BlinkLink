import { Navigate, Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function PrivateRoute() {
    const currentUser = true;
    return (
        <div>
            <Header />
            <Sidebar />
            {currentUser ? <Outlet /> : <Navigate to="/sign-in" />}
        </div>
    );
}
