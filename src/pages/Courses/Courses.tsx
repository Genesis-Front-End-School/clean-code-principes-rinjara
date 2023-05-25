import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import CoursesList from 'components/MainPage/CoursesList';
import {
  Hero,
  load,
  Loader,
  PaginationControlled,
} from 'rinjara-course-comp-lib';
import { getCoursesList } from 'services/api/fetchApi';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';

const Courses = () => {
  const [courses, setCourses] = useState([] as Course[]);
  const [page, setPage] = useState(1);
  const [isCoursesLoading, setIsCoursesLoading] = useState(true);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);
  const shouldRenderElements = courses?.length > 0;

  useEffect(() => {
    getCoursesList()
      .then(response => setCourses(response))
      .then(() => setIsCoursesLoading(false));
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    const lastCourse = load('lastCourseId');
    if (!lastCourse) {
      Notify.info('Please, choose your course in the list below!');
      return;
    }
    navigate(`/course/${lastCourse}`);
  };

  const setPaginationPage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <section>
      <Hero handleClick={handleClick} />
      {isCoursesLoading && <Loader />}
      {shouldRenderElements && (
        <Container>
          <CoursesList courses={currentCourses} />
          <PaginationControlled
            totalPages={totalPages}
            currentPage={page}
            handleChange={setPaginationPage}
          />
        </Container>
      )}
    </section>
  );
};

export default Courses;
