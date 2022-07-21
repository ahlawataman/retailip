import { useLocation, Navigate, Outlet } from 'react-router-dom';

export default function AlreadyAuth() {
    const location = useLocation();

    return (
        sessionStorage?.getItem('jwtToken')
            ?<Navigate to="/"/>
            :<Outlet/>
    );
}
