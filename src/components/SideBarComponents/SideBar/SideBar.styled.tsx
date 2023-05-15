import { styled } from '@mui/material/styles';
import { Toolbar, ListItem } from '@mui/material';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  position: 'absolute',
  right: 8,
  top: 0,
  gap: 16,
}));

export const StyledListItem = styled(ListItem)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
