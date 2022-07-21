import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {
    const location = useLocation();

    return (
        sessionStorage?.getItem('jwtToken')
            ?<Outlet/>
            : <Navigate to="/login" state={{ from: location}} replace />
    );
}

export default RequireAuth;