import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { StyledLink } from './Header.styles';

import Logo from '../logo/Logo';
import AuthButton from '../login/AuthButton';

const items = [
  { name: 'My Bookmarks', link: '/bookmarks' },
  { name: 'My account', link: '/account' },
];

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Box mb={10}>
      <AppBar component="nav">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledLink to="/">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Logo color={'#fff'} />
              <Typography variant="button" sx={{ color: '#fff' }}>
                BRIGHT SIDE
              </Typography>
            </Box>
          </StyledLink>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isAuthenticated && (
              <div>
                {items.map(({ name, link }, index) => (
                  <StyledLink key={`${name}-${index}`} to={link}>
                    <Typography variant="button" mr={1} sx={{ color: '#fff' }}>
                      {name}
                    </Typography>
                  </StyledLink>
                ))}
              </div>
            )}
            <AuthButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
