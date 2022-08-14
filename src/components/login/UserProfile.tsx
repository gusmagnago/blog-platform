import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <Container>
      {isAuthenticated && user && (
        <>
          <Card sx={{ maxWidth: '50%', my: 3 }}>
            <CardMedia component="img" alt={user?.name} image={user.picture} />
          </Card>
          <Box>
            <Typography variant="h6" component="div">
              Name: {user.name}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              Email: {user.email}
            </Typography>
            <Box>
              <Link to={`/post/create`}>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2, mr: 2 }}
                >
                  Publish article
                </Button>
              </Link>
              <Link to={`/articles`}>
                <Button color="secondary" variant="contained" sx={{ my: 2 }}>
                  Check out your articles
                </Button>
              </Link>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

export default UserProfile;
