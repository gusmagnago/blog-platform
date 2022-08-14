import { Box, Typography, Container } from '@mui/material';
import PostForm from '../../components/post/components/form/PostForm';

const CreatePost = () => {
  return (
    <Container sx={{ mb: 8 }}>
      <Box sx={{ textAlign: 'center' }} my={5}>
        <Typography variant="h3">Create your new Article</Typography>
      </Box>
      <PostForm />
    </Container>
  );
};

export default CreatePost;
