import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LinkButton from '../../components/button/LinkButton';
import BookmarkButton from '../../components/post/components/bookmark-button/BookmarkButton';
import Content from '../../components/post/components/content/Content';
import { AppContext } from '../../context/appContext';
import { ArticlesContextType, IArticle } from '../../utils/types/articles';

export interface ArticleProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  content: string;
}

const ReadPost = () => {
  const { id } = useParams();
  const { user } = useAuth0();
  const navigate = useNavigate();

  const { articles, getArticleById, convertDate, removeArticle } = useContext(
    AppContext
  ) as ArticlesContextType;

  const article: IArticle | undefined = getArticleById(id!, articles);

  const handleDelete = () => {
    removeArticle('posts');
    navigate('/');
  };

  const renderActionButton = (id: string) => {
    if (user) {
      if (user.name === article?.createdBy) {
        return (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 8 }}>
            <Button onClick={() => handleDelete()}>Delete</Button>
            <LinkButton path={'post/edit'} id={id} text={'Edit'} />
          </Box>
        );
      }
    }
  };

  return (
    <Container>
      {id && articles && article && (
        <Box key={id} sx={{ mb: 5 }}>
          <BookmarkButton article={article} id={id} />
          <Box sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h2">{article.title}</Typography>
            <Typography variant="caption" gutterBottom>
              {article.createdBy}
            </Typography>
            <Typography variant="caption" gutterBottom>
              {convertDate(article.createdAt)}
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{ p: 3, mb: 3 }}
            paragraph
            width={'50%'}
          >
            {article?.description}
          </Typography>
          <Box
            sx={{
              py: 4,
              mx: 6,
              backgroundImage: `url(${article.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              display: 'flex',
              alignItems: 'center',
            }}
            maxWidth={'100%'}
            height={400}
          />
          <Content content={article.content} contentLength={350} />
          {/* <Typography variant="body1" sx={{ p: 6, whiteSpace: 'pre-wrap' }}>
            {article.content}
          </Typography> */}
          {renderActionButton(article.id)}
        </Box>
      )}
    </Container>
  );
};

export default ReadPost;
