import { Box, Typography, Container } from '@mui/material';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../../components/post/components/form/PostForm';
import { AppContext } from '../../context/appContext';
import { ArticlesContextType, IArticle } from '../../utils/types/articles';

const EditPost = () => {
  const { id } = useParams();

  const { articles, getArticleById } = useContext(
    AppContext
  ) as ArticlesContextType;

  const article: IArticle | undefined = getArticleById(id!, articles);

  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 3 }}>
        <Typography variant="h3">Edit your Article</Typography>
      </Box>
      <PostForm isEdit article={article!} />
    </Container>
  );
};

export default EditPost;
