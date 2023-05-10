import React from 'react';
import {
  CardActions,
  CardContent,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore } from 'components/MainPage/CourseCard/CourseCard.styled';

type SkillsListProps = {
  isExpanded: boolean;
  handleExpandClick: () => void;
  skills?: string[];
};

const SkillsList: React.FC<SkillsListProps> = ({
  isExpanded,
  handleExpandClick,
  skills,
}) => {
  return (
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
  );
};

export default SkillsList;
