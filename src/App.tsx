import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ThemeToggleBtn from 'components/ThemeToggleBtn/ThemeToggleBtn';
import { ColorModeProvider } from 'context/ColorModeContextProvider';

const SharedLayout = lazy(() => import('components/SharedLayout'));
const Courses = lazy(() => import('pages/Courses'));
const Course = lazy(() => import('pages/Course'));
const Loader = lazy(() => import('components/Loader'));

const App = () => {
  return (
    <ColorModeProvider>
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
    </ColorModeProvider>
  );
};

export default App;
