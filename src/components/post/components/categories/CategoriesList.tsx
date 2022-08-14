import { Box, Button, Grid, Typography } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

export const categories = [
  { label: 'Marketing', value: '0' },
  { label: 'Design', value: '1' },
  { label: 'Engineering', value: '2' },
];

type PropTypes = {
  categoryParams: string;
};

const CategoriesList = ({ categoryParams }: PropTypes) => {
  const navigate = useNavigate();

  const handleFilterClick = (label: string) => {
    const findLabel = categories.find((item) => item.label === label);
    navigate(`/${findLabel?.label}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }} width={'100%'} px={2}>
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 3, xl: 12 }}
        columns={{ xs: 1, sm: 1, md: 12, xl: 12 }}
      >
        <Grid item>
          <Typography variant="h6" component="h6">
            Categories
          </Typography>
          {categoryParams && (
            <Link to="/">
              <Button variant="outlined" sx={{ borderRadius: '1rem' }}>
                All
              </Button>
            </Link>
          )}
        </Grid>
        {categories.map(({ label, value }, index) => (
          <Grid item key={index}>
            <Button
              variant="outlined"
              key={value}
              sx={{ borderRadius: '1rem' }}
              onClick={() => handleFilterClick(label)}
            >
              {label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesList;
