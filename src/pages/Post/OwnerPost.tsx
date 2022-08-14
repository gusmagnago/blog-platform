import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography, Container } from '@mui/material';
import { useContext } from 'react';
import List from '../../components/post/components/list/List';
import { AppContext } from '../../context/appContext';
import { ArticlesContextType, IArticle } from '../../utils/types/articles';

const OwnerPost = () => {
  const { user } = useAuth0();

  const { articles, getArticleByUser } = useContext(
    AppContext
  ) as ArticlesContextType;

  const articlesByUser = getArticleByUser(articles, user?.name);

  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 3 }}>
        <Typography variant="h3">Check all your articles</Typography>
      </Box>
      {articlesByUser && <List data={articlesByUser as IArticle[]} />}
    </Container>
  );
};

export default OwnerPost;
