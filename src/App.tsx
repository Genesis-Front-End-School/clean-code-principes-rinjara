import React, { createContext, lazy, Suspense, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import ThemeToggleBtn from 'components/ThemeToggleBtn/ThemeToggleBtn';
import { getDesignTokens } from 'theme/theme';

const SharedLayout = lazy(() => import('components/SharedLayout'));
const Courses = lazy(() => import('pages/Courses'));
const Course = lazy(() => import('pages/Course'));
const Loader = lazy(() => import('components/Loader'));

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Courses />} />
              <Route path="course/:courseId" element={<Course />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
          <CssBaseline />
          <ThemeToggleBtn />
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
