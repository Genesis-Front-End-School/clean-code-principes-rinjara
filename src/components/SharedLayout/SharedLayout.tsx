import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '@mui/material';
import NavBar from 'components/NavBar';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <AppBar position="relative">
        <NavBar />
      </AppBar>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
