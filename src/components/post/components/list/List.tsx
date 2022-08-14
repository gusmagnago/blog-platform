import { Box, Grid, Stack } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../../context/appContext';
import {
  ArticlesContextType,
  IArticle,
} from '../../../../utils/types/articles';
import ArticleCard from '../card/ArticleCard';
import CategoriesList from '../categories/CategoriesList';

type PropTypes = {
  data: IArticle[];
};

type GridDisplay =
  | { showLatest?: true; topGridSpacing: number; listGridSpacing: number }
  | { showLatest?: false; topGridSpacing?: never; listGridSpacing?: number };

const List = ({
  data,
  showLatest,
  topGridSpacing,
}: PropTypes & GridDisplay) => {
  const { filterArticles } = useContext(AppContext) as ArticlesContextType;
  const [value, setValue] = useState<IArticle[]>(data);

  const { category } = useParams();

  const filteredData = value
    .map((article) => article)
    .sort((a, b) => Number(a.createdAt) - Number(b.createdAt));

  useEffect(() => {
    if (data) {
      setValue(data);
    }
    if (category) {
      const filteredList = filterArticles(data, category);
      setValue(filteredList);
    }
  }, [category, data, filterArticles, setValue]);

  const renderList = () => {
    if (filteredData[0].content.length) {
      return (
        <Box width={'100%'} px={1}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {value.map(({ title, description, image, id }, index) => (
              <Grid item key={index} xs={12} md={6} xl={6}>
                <Stack spacing={2} my={4} key={`${id}-${index}`}>
                  <ArticleCard
                    title={title}
                    description={description}
                    image={image}
                    id={id}
                    maxWidth={'100%'}
                    maxHeight={250}
                    flexDirection={'row-reverse'}
                    imgHeight={250}
                    buttonText={'Read'}
                    width={'50%'}
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
  };

  return (
    <Grid container spacing={2}>
      {filteredData[0].content.length &&
        (showLatest ? (
          <>
            <Grid item xs={topGridSpacing}>
              <Stack spacing={2} my={4}>
                <ArticleCard
                  title={filteredData[0].title}
                  description={filteredData[0].description}
                  image={filteredData[0].image}
                  id={filteredData[0].id}
                  maxWidth={'100%'}
                  maxHeight={250}
                  flexDirection={'row'}
                  imgHeight={250}
                  buttonText={'Read'}
                  width={'50%'}
                />
              </Stack>
            </Grid>
            <CategoriesList categoryParams={category!} />
            <>{renderList()}</>
          </>
        ) : (
          <>{renderList()}</>
        ))}
    </Grid>
  );
};

export default List;
