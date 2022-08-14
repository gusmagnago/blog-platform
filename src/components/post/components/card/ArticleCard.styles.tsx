import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StyledTypography = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.variant === 'h6' ? 2 : 3)};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
