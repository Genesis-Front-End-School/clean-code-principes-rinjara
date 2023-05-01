import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PROXY_URL } from 'helpers/constants';
import { save } from 'services/localStorage/storage';
import {
  ExpandMore,
  StyledCardActions,
} from 'components/CourseCard/CourseCard.styled';

type CourseCardProps = {
  data: Course;
};

const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { id, title, previewImageLink, lessonsCount, rating, meta } = data;
  const { skills, courseVideoPreview } = meta || {};
  const hasVideo = !!courseVideoPreview;

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = () => {
    save('lastCourseId', id);
  };

  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {hasVideo && isHovered ? (
        <ReactPlayer
          url={`${PROXY_URL}${courseVideoPreview?.link}`}
          playing={isHovered}
          loop={isHovered}
          muted={true}
          controls={false}
          width="100%"
          height="200px"
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <CardMedia
          component="img"
          src={`${previewImageLink}/cover.webp`}
          width="100%"
          height="200px"
          alt={title}
          style={{ display: 'block' }}
        />
      )}

      <StyledCardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          component={NavLink}
          to={`course/${id}`}
        >
          View course
        </Button>
      </StyledCardActions>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {lessonsCount} Lessons
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating}
        </Typography>

        {skills?.length! > 0 && (
          <>
            <CardActions disableSpacing style={{ padding: 0 }}>
              <Typography variant="h6" color="text.secondary">
                Skills
              </Typography>
              <ExpandMore
                expand={isExpanded ? 1 : 0}
                onClick={handleExpandClick}
                aria-expanded={isExpanded}
                aria-label="more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <List>
                  {skills?.map((skill: string) => (
                    <ListItem key={skill}>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Collapse>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
