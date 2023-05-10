import React, { useMemo } from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LessonsList from 'components/SideBarComponents/LessonsList';
import {
  DrawerHeader,
  StyledToolbar,
} from 'components/SideBarComponents/SideBar/SideBar.styled';

interface SideBarProps {
  usedData: UsedData;
  course: Course;
  handleLessonsChange: (order: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  usedData,
  course,
  handleLessonsChange,
}) => {
  const theme = useTheme();
  const sortedLessons = useMemo(
    () => [...course.lessons].sort((a, b) => a.order - b.order),
    [course.lessons]
  );

  return (
    <>
      <StyledToolbar>
        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
          component="div"
        >
          Lessons
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={usedData.handleDrawerOpen}
          sx={{ ...(usedData.isOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </StyledToolbar>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            [theme.breakpoints.up('sm')]: {
              width: usedData.drawerWidth,
            },
            [theme.breakpoints.up('xs')]: {
              width: '100%',
            },
          },
        }}
        variant="persistent"
        anchor="right"
        open={usedData.isOpen}
      >
        <DrawerHeader>
          <IconButton onClick={usedData.handleDrawerClose}>
            {usedData.theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <LessonsList
          sortedLessons={sortedLessons}
          handleLessonsChange={handleLessonsChange}
        />
      </Drawer>
    </>
  );
};

export default SideBar;
