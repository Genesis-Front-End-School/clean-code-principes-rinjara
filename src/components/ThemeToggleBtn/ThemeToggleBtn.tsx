import * as React from 'react';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from 'App';

const ThemeToggleBtn = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        right: 10,
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        borderRadius: 50,
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color="primary">
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon fontSize="large" />
        ) : (
          <Brightness4Icon fontSize="large" />
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeToggleBtn;
