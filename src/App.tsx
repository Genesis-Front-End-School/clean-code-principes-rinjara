import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ThemeToggleBtn from 'components/ThemeToggleBtn';
import { ColorModeProvider } from 'context/ColorModeContextProvider';
import { SharedLayout, Loader } from 'rinjara-course-comp-lib';

// const SharedLayout = lazy(() => import('rinjara-course-comp-lib/SharedLayout'));
const Courses = lazy(() => import('pages/Courses'));
const Course = lazy(() => import('pages/Course'));
// const Loader = lazy(() => import('rinjara-course-comp-lib/Loader'));

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
