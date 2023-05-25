import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Notify } from 'notiflix'
import { Button, Toolbar } from '@mui/material'
import Logo from './icons/logo.svg'
import { load } from '../../localStorage'

export const NavBar = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    const lastCourse = load('lastCourseId')
    if (!lastCourse) {
      Notify.info('Please, choose your course in the list below!')
      return
    }
    navigate(`/course/${lastCourse}`)
  }

  return (
    <Toolbar style={{ gap: 10 }}>
      <Logo />

      <Button variant='contained' component={NavLink} to='/'>
        Courses
      </Button>
      <Button onClick={handleClick} variant='contained'>
        My course
      </Button>
    </Toolbar>
  )
}
