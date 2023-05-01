import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface ExpandMoreProps extends IconButtonProps {
  expand: number;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: `rotate(${expand ? '180' : '0'}deg)`,
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const StyledCardActions = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));
