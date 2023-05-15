import { grey, lime, teal } from '@mui/material/colors';

export const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: lime,
          divider: lime[200],
          background: {
            default: lime[50],
            paper: lime[50],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: teal,
          divider: teal[700],
          background: {
            default: teal[900],
            paper: teal[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});
