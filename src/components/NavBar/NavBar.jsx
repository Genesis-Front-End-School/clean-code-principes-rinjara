import { NavLink, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { Button, Toolbar } from '@mui/material';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { load } from '../../services/localStorage/storage';

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const lastCourse = load('lastCourseId');
    if (!lastCourse) {
      Notify.info('Please, choose your course in the list below!');
      return;
    }
    navigate(`/course/${lastCourse}`);
  };

  return (
    <Toolbar>
      <Logo color="white" />

      <Button variant="undefined" component={NavLink} to="/">
        Courses
      </Button>
      <Button onClick={handleClick} variant="undefined">
        My course
      </Button>
    </Toolbar>
  );
};

export default NavBar;
