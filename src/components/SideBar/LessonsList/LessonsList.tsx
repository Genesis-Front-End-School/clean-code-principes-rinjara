import React from 'react';
import { List } from '@mui/material';
import Lesson from 'components/SideBar/Lesson';
import { StyledListItem } from 'components/SideBar/SideBar.styled';

interface LessonsListProps {
  sortedLessons: Lesson[];
  handleLessonsChange: (order: number) => void;
}

const LessonsList: React.FC<LessonsListProps> = ({
  sortedLessons,
  handleLessonsChange,
}) => {
  return (
    <List>
      {sortedLessons.map((lesson, index) => (
        <StyledListItem key={lesson.id}>
          <Lesson
            index={index}
            lessonData={lesson}
            handleLessonsChange={handleLessonsChange}
          />
        </StyledListItem>
      ))}
    </List>
  );
};

export default LessonsList;
