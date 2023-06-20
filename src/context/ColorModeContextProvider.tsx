import React, { createContext, useMemo, useState } from 'react';
import { createTheme, PaletteMode } from '@mui/material';
import { getDesignTokens } from 'theme/theme';
import { ThemeProvider } from '@mui/material/styles';

const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

interface IColorModeContextProps {
  children?: React.ReactNode;
}

const ColorModeProvider: React.FC<IColorModeContextProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ColorModeProvider, ColorModeContext };
