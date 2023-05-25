import { Notify } from 'notiflix';
import instance from 'services/api/axiosConfig';

export const setToken = (token?: string): string => {
  if (!token) return (instance.defaults.headers.common.authorization = '');

  return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
};

export const getToken = async () => {
  try {
    const response = await instance.get(
      '/auth/anonymous?platform=subscriptions'
    );
    const token = response.data.token;
    setToken(token);
  } catch (error) {
    Notify.failure('Oooops! Something goes wrong. Please, try again later!');
    throw error;
  }
};

interface CoursesList {
  courses: Course[];
}

export const getCoursesList = async () => {
  try {
    await getToken();
    const { data } = await instance.get<CoursesList>('/core/preview-courses');
    return data.courses;
  } catch (error) {
    Notify.failure('Oooops! Something goes wrong. Please, try again later!');
    throw error;
  }
};

export const getCourse = async (courseId: string) => {
  try {
    await getToken();
    const { data } = await instance.get<Course>(
      `/core/preview-courses/${courseId}`
    );
    return data;
  } catch (error) {
    Notify.failure('Oooops! Something goes wrong. Please, try again later!');
    throw error;
  }
};
