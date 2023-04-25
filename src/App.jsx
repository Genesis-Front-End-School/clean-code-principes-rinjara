import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const SharedLayout = lazy(() => import('./components/SharedLayout'));
const Courses = lazy(() => import('./pages/Courses'));
const Course = lazy(() => import('./pages/Course'));
const Loader = lazy(() => import('./components/Loader'));

const theme = createTheme();

const App = () => {
  return (
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
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
