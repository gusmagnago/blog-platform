import { Box, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import LinkButton from '../../../button/LinkButton';
import { StyledTypography } from './ArticleCard.styles';
import { CardProps } from './ArticleCard.types';

const ArticleCard = ({
  title,
  description,
  image,
  id,
  maxWidth,
  maxHeight,
  flexDirection,
  imgHeight,
  width,
  buttonText,
}: CardProps) => {
  return (
    <Card
      sx={{
        width: maxWidth,
        maxHeight: maxHeight || null,
        display: 'flex',
        flexDirection: flexDirection,
      }}
      id={id}
    >
      <Box sx={{ width: '50%' }}>
        <CardMedia
          component="img"
          height={imgHeight}
          width={'50%'}
          image={image}
          sx={{
            background: 'no-repeat center center fixed',
            overflow: 'hidden',
          }}
          alt={`article-${title}-img`}
        />
      </Box>
      <CardContent
        sx={{
          maxWidth: { width },
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <StyledTypography gutterBottom variant="h6">
          {title}
        </StyledTypography>
        <StyledTypography variant="body2">{description}</StyledTypography>
        <CardActions>
          <LinkButton path={'post'} id={id} text={buttonText} />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
