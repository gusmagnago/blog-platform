import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const AuthButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleAuth = () => {
    if (isAuthenticated) {
      return logout({ returnTo: window.location.origin });
    }

    return loginWithRedirect();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleAuth()}
      >
        {isAuthenticated ? 'Log out' : 'Login'}
      </Button>
    </div>
  );
};

export default AuthButton;
