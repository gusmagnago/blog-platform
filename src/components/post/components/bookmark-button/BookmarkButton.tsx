import { BookmarkAdd, BookmarkAdded } from '@mui/icons-material';
import { Box, Button, Tooltip } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../context/appContext';
import {
  ArticlesContextType,
  IArticle,
} from '../../../../utils/types/articles';

type PropTypes = {
  article: IArticle;
  id: string;
};

const BookmarkButton = ({ article, id }: PropTypes) => {
  const { saveArticle, getArticleById, removeArticle } = useContext(
    AppContext
  ) as ArticlesContextType;

  const [isSaved, setIsSaved] = useState(false);

  const articleList = localStorage.getItem('bookmarks');
  const savd = articleList && getArticleById(id, JSON.parse(articleList));

  const handleSaveBookmark = () => {
    saveArticle(article, 'bookmarks');
    setIsSaved(!isSaved);
    if (savd) {
      removeArticle('bookmarks');
    }
  };

  useEffect(() => {
    if (articleList !== null) {
      if (savd) {
        setIsSaved(!isSaved);
      }
    }
  }, [setIsSaved]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Tooltip
        title={isSaved ? 'Saved to read later' : 'Save to read later'}
        placement="top-start"
      >
        <Button onClick={() => handleSaveBookmark()}>
          {isSaved ? <BookmarkAdded /> : <BookmarkAdd />}
        </Button>
      </Tooltip>
    </Box>
  );
};

export default BookmarkButton;
