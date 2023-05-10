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
import { PROXY_URL } from 'helpers/constants';

interface LessonProps {
  lessonData: Lesson;
  handleLessonsChange: (index: number) => void;
  index: number;
}

const Lesson: React.FC<LessonProps> = ({
  lessonData,
  handleLessonsChange,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldPlayVideo = isHovered && lessonData.status !== 'locked';
  const lessonVideoURL = `${PROXY_URL}${lessonData.link}`;
  const lessonImgURL = `${lessonData.previewImageLink}/lesson-${lessonData.order}.webp`;

  const handleClickOnCard = () => {
    if (lessonData.status === 'locked') {
      Notify.failure('This lesson is locked. Please, follow the order!');
      return;
    }
    handleLessonsChange(index);
  };

  return (
    <>
      <Typography gutterBottom variant="h5" component="h3">
        Lesson {lessonData.order}
      </Typography>
      <Card
        sx={{
          width: {
            xs: '380px',
            sm: '300px',
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardActionArea onClick={handleClickOnCard}>
          <Box
            sx={{
              height: 150,
            }}
          >
            {shouldPlayVideo ? (
              <ReactPlayer
                url={lessonVideoURL}
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
                image={lessonImgURL}
                alt={`lesson-${lessonData.order}`}
                style={{ display: 'block' }}
              />
            )}
          </Box>

          <CardContent>
            <Typography gutterBottom variant="h6" component="h4" align="center">
              &quot;{lessonData.title}&quot;
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
