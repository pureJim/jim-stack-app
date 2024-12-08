import { Navigate } from 'react-router';
import { isAuthenticated } from './auth';

const AuthRoute = () => {
  if (isAuthenticated()) {
    return <Navigate to="/401" replace />;
  }
};

export default AuthRoute;
