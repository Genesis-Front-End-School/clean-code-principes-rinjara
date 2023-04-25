import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Notify } from 'notiflix';
import {
  Box,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { proxyURL } from '../../helpers/constants';

const Lesson = ({ lessonData, handleLessonsChange, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldPlayVideo = isHovered && lessonData.status !== 'locked';

  return (
    <>
      <Typography gutterBottom variant="h5" component="h3">
        Lesson {lessonData.order}
      </Typography>
      <Card
        sx={{
          maxWidth: {
            lg: 345,
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardActionArea
          onClick={() => {
            if (lessonData.status === 'locked') {
              Notify.failure(
                'This lesson is locked. Please, follow the order!'
              );
              return;
            }
            handleLessonsChange(index);
          }}
        >
          <Box
            sx={{
              height: 150,
              maxWidth: {
                md: '300px',
              },
            }}
          >
            {shouldPlayVideo ? (
              <ReactPlayer
                url={`${proxyURL}${lessonData.link}`}
                playing={isHovered}
                loop={isHovered}
                muted={true}
                controls={false}
                width="100%"
                height="100%"
              />
            ) : (
              <CardMedia
                component="img"
                width="100%"
                height="100%"
                image={`${lessonData.previewImageLink}/lesson-${lessonData.order}.webp`}
                alt={`lesson-${lessonData.order}`}
                style={{ display: 'block' }}
              />
            )}
          </Box>

          <CardContent>
            <Typography gutterBottom variant="h6" component="h4" align="center">
              "{lessonData.title}"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {lessonData.status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Lesson;
