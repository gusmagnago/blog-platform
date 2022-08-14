import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import Modal from '../../../modal/Modal';

type PropTypes = {
  content: string;
  contentLength: number;
};

const Content = ({ content, contentLength }: PropTypes) => {
  const { isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Typography variant="body1" sx={{ p: 6, whiteSpace: 'pre-wrap' }}>
        {isAuthenticated ? (
          content
        ) : (
          <>
            {`${content.slice(0, contentLength)}...`}
            <Button onClick={() => toggleReadMore()}>Read more</Button>
          </>
        )}
      </Typography>
      {isOpen && <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} />}
    </>
  );
};

export default Content;
