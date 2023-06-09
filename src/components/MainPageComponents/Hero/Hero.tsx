import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { load } from 'services/localStorage/storage';

const Hero = () => {
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
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Genesis Academy
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Explore our catalog of courses available at Genesis Academy, a tech
          company dedicated to providing top-quality education in the latest
          technologies. Browse our courses and start your learning journey
          today!
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" onClick={handleClick}>
            Continue My Course
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
