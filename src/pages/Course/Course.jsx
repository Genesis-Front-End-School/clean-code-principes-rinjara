import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material';
import SideBar from '../../components/SideBar';
import CoursePage from '../../components/CoursePage';
import Loader from '../../components/Loader';
import { getCourse } from '../../services/api/fetchApi';
import { load, save } from '../../services/localStorage/storage';

const Course = () => {
  const [courseData, setCourseData] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [lessonNumber, setLessonNumber] = useState(0);
  const [isCourseLoading, setIsCourseLoading] = useState(true);
  const { courseId } = useParams();
  const theme = useTheme();
  const drawerWidth = 340;

  useEffect(() => {
    getCourse(courseId)
      .then(response => {
        setCourseData(response);

        const lessonProgress = load('lessonProgress');
        if (lessonProgress) {
          if (Object.keys(lessonProgress).indexOf(courseId) !== -1) {
            setLessonNumber(lessonProgress[courseId]);
          }
        }
      })
      .finally(() => setIsCourseLoading(false));
  }, [courseId]);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleLessonsChange = lessonOrder => {
    const lessonProgress = load('lessonProgress') || {};
    lessonProgress[courseId] = lessonOrder;
    save('lessonProgress', lessonProgress);

    setLessonNumber(lessonOrder);
  };

  const usedData = {
    isOpen: isOpen,
    handleDrawerOpen: handleDrawerOpen,
    handleDrawerClose: handleDrawerClose,
    drawerWidth: drawerWidth,
    theme: theme,
    lesson: lessonNumber,
  };

  return (
    <>
      {isCourseLoading && <Loader />}
      {courseData && (
        <>
          <SideBar
            course={courseData}
            usedData={usedData}
            handleLessonsChange={handleLessonsChange}
          />
          <CoursePage course={courseData} usedData={usedData} />
        </>
      )}
    </>
  );
};

export default Course;
