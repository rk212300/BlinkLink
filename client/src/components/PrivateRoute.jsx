import { Outlet, Navigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function PrivateRoute() {
    const currentUser = true
    return (
        <div>
            <Header />
            <Sidebar />
            {currentUser ? <Outlet /> : <Navigate to='/sign-in' />}
        </div>
    )
}