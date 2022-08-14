import { useAuth0, User } from '@auth0/auth0-react';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import AppProvider from './context/appContext';
import Account from './pages/Account/Account';

import Bookmarks from './pages/Bookmarks/Bookmarks';
import Home from './pages/Home/Home';
import CreatePost from './pages/Post/CreatePost';
import EditPost from './pages/Post/EditPost';
import OwnerPost from './pages/Post/OwnerPost';
import ReadPost from './pages/Post/ReadPost';
import { theme } from './themes/Theme';

function App() {
  const { user } = useAuth0();

  const [postUser, setPostUser] = useState<User>({});

  useEffect(() => {
    if (user) {
      return setPostUser(user);
    }
  }, [setPostUser, user]);

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Home />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute user={postUser} redirectTo={'/'}>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post/create"
            element={
              <ProtectedRoute user={postUser} redirectTo={'/'}>
                <CreatePost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <ProtectedRoute user={postUser} redirectTo={'/'}>
                <ReadPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post/edit/:id"
            element={
              <ProtectedRoute user={postUser} redirectTo={'/'}>
                <EditPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles"
            element={
              <ProtectedRoute user={postUser} redirectTo={'/'}>
                <OwnerPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <ProtectedRoute user={postUser} redirectTo={'/'}>
                <Bookmarks />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
