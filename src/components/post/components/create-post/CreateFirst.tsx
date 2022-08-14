import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthButton from '../../../login/AuthButton';

type PropTypes = {
  content: string;
  buttonTxt: string;
  navigateTo: string;
};

const CreateFirst = ({ content, buttonTxt, navigateTo }: PropTypes) => {
  const { user, isAuthenticated } = useAuth0();

  const message =
    isAuthenticated && user
      ? `Hey, ${user.name}. ${content}`
      : `Hello. ${content}`;

  return (
    <Paper>
      <Box
        p={3}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography py={2}>{message}</Typography>
        {isAuthenticated ? (
          <Link to={navigateTo}>
            <Button variant="contained" color="secondary">
              {buttonTxt}
            </Button>
          </Link>
        ) : (
          <AuthButton />
        )}
      </Box>
    </Paper>
  );
};

export default CreateFirst;
