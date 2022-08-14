import { Container } from '@mui/material';

import { AppContext } from '../../context/appContext';
import { ArticlesContextType } from '../../utils/types/articles';
import { useContext } from 'react';
import List from '../../components/post/components/list/List';
import CreateFirst from '../../components/post/components/create-post/CreateFirst';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const { articles } = useContext(AppContext) as ArticlesContextType;

  const createButton = 'Create first post';

  const message =
    'There are no articles yet, give us the honor of posting the first article';

  const content =
    isAuthenticated && user
      ? `Hey, ${user.name}. ${message}`
      : `Hello. ${message}`;

  return (
    <Container sx={{ mt: 5, mb: 8 }}>
      {articles.length > 1 ? (
        <List
          data={articles}
          showLatest
          topGridSpacing={12}
          listGridSpacing={6}
        />
      ) : (
        <CreateFirst
          content={content}
          buttonTxt={createButton}
          navigateTo={'/post/create'}
        />
      )}
    </Container>
  );
};
export default Home;
