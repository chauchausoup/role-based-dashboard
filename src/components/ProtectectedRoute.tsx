import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {RootState} from '@/feature/store';

const ProtectedRoute = ({children}: {children: JSX.Element}) => {
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
