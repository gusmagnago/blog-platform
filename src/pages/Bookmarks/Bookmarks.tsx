import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { ArticlesContextType } from '../../utils/types/articles';
import { Container } from '@mui/material';
import List from '../../components/post/components/list/List';
import CreateFirst from '../../components/post/components/create-post/CreateFirst';

const Bookmarks = () => {
  const { bookmarks } = useContext(AppContext) as ArticlesContextType;

  const back = 'Back';

  const content =
    'You did not saved any articles yet. Please checkout our articles';

  return (
    <Container>
      {bookmarks.length ? (
        <List data={bookmarks} />
      ) : (
        <CreateFirst content={content} buttonTxt={back} navigateTo={'/'} />
      )}
    </Container>
  );
};

export default Bookmarks;
