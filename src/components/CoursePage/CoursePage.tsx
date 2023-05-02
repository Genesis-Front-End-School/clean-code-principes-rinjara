import React from 'react';
import { Box, CardMedia, Theme, Typography } from '@mui/material';
import VideoPlayer from 'components/VideoPlayer';
import { PROXY_URL } from 'helpers/constants';
import { Wrapper } from 'components/CoursePage/CoursePage.styled';

interface CoursePageProps {
  course: Course;
  usedData: {
    isOpen: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
    drawerWidth: number;
    theme: Theme;
    lesson: number;
  };
}

const CoursePage: React.FC<CoursePageProps> = ({ course, usedData }) => {
  return (
    <Wrapper open={usedData.isOpen} drawerwidth={usedData.drawerWidth}>
      <CardMedia
        component="img"
        src={`${course.previewImageLink}/cover.webp`}
        width="100%"
        height="250px"
        alt={course.title}
        style={{ display: 'block', objectFit: 'contain' }}
      />

      <Typography align="center" variant="h3" component="h2">
        &quot;{course.title}&quot;
      </Typography>
      <Typography align="justify" paragraph>
        {course.description}
      </Typography>
      <Box
        sx={{
          maxWidth: {
            lg: '1000px',
          },
          height: {
            xs: '300px',
            sm: '450px',
            md: '350px',
          },
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
          },
          gap: {
            xs: '6px',
            sm: '6px',
            md: '5px',
          },
          alignItems: 'end',
          marginBottom: '25px',
        }}
      >
        <VideoPlayer
          URL={`${PROXY_URL}${course.lessons[usedData.lesson].link}`}
          muted={false}
        />
        <div>
          <Typography variant="subtitle2" component="p">
            If you want to Increase playback speed - use combination &quot;Ctrl
            + Shift + S &quot;
          </Typography>
          <Typography variant="subtitle2" component="p">
            If you want to Decrease playback speed - use combination &quot;Ctrl
            + S&quot;
          </Typography>
        </div>
      </Box>
      <Typography variant="h4" component="h3">
        Lesson {course.lessons[usedData.lesson].order}: &quot;
        {course.lessons[usedData.lesson].title}&quot;
      </Typography>
    </Wrapper>
  );
};

export default CoursePage;
