import { User } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

type PropTypes = {
  user: User | undefined;
  children?: JSX.Element | JSX.Element[];
  redirectTo: string;
};

const ProtectedRoute = ({ user, children, redirectTo }: PropTypes) => {
  if (!user) {
    return <Navigate to={`${redirectTo}`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
