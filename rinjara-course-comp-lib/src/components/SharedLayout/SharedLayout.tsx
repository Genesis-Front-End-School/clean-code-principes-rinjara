import React, { Fragment, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { AppBar } from '@mui/material'
import { NavBar } from '../NavBar'
import { Loader } from '../Loader'

export const SharedLayout = () => {
  return (
    <Fragment>
      <AppBar position='relative'>
        <NavBar />
      </AppBar>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Fragment>
  )
}
