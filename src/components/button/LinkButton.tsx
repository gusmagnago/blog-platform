import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

type PropTypes = {
  path: string;
  id: string;
  text: string;
};

const LinkButton = ({ path, id, text }: PropTypes) => {
  return (
    <Link to={`/${path}/${id}`}>
      <Button color="secondary" variant="contained">
        {text}
      </Button>
    </Link>
  );
};

export default LinkButton;
