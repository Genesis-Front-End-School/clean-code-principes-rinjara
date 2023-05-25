import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import NavBar from 'components/NavBar';
import { Notify } from 'notiflix';
// import { save, load } from 'services/localStorage/storage';

import { load as loadFn } from 'services/localStorage/storage';

jest.mock('services/localStorage/storage', () => {
  const originalModule = jest.requireActual('services/localStorage/storage');
  return {
    ...originalModule,
    load: jest.fn().mockReturnValue(undefined),
  };
});

type LoadFn = typeof loadFn;
const mockedLoadFn = loadFn as jest.MockedFunction<LoadFn>;

// export { mockedLoadFn };

// jest.mock('services/localStorage/storage', () => ({
//   //   save: jest.fn(),
//   load: jest.fn(),
// }));

jest.mock('notiflix', () => ({
  Notify: {
    info: jest.fn(),
  },
}));

describe('NavBar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the logo', () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('should render the "Courses" button', () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole('button', { name: /courses/i })
    ).toBeInTheDocument();
  });

  it('should render the "My course" button', () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole('button', { name: /my course/i })
    ).toBeInTheDocument();
  });

  //   it('should navigate to the home page when "Courses" button is clicked', () => {
  //     const { container } = render(<NavBar />, { wrapper: MemoryRouter });
  //     fireEvent.click(screen.getByRole('button', { name: /courses/i }));
  //     expect(container.innerHTML).toMatch('/'); // Replace with expected route for the home page
  //   });

  //   it('should navigate to the last visited course page when "My course" button is clicked and lastCourseId is present', () => {
  //     const lastCourseId = '123';
  //     load.mockReturnValue(lastCourseId);

  //     const { getByText } = render(
  //       <MemoryRouter>
  //         <NavBar />
  //       </MemoryRouter>
  //     );

  //     fireEvent.click(getByText('My course'));

  //     expect(load).toHaveBeenCalledWith('lastCourseId');
  //     expect(save).not.toHaveBeenCalled();
  //     expect(Notify.info).not.toHaveBeenCalled();
  //     expect(window.location.pathname).toBe(`/course/${lastCourseId}`);
  //   });

  it('should navigate to the home page when "Courses" button is clicked', () => {
    const { getByText } = render(<NavBar />);
    const coursesButton = getByText('Courses');

    fireEvent.click(coursesButton);

    expect(location.pathname).toBe('/');
  });

  it('should navigate to the last visited course page when "My course" button is clicked and lastCourseId is present', () => {
    const lastCourseId = '123';
    const { getByText } = render(<NavBar />);
    const myCourseButton = getByText('My course');
    const navigateSpy = jest.spyOn(NavBar.prototype, 'navigate');
    jest.spyOn(Notify, 'info');

    mockedLoadFn.mockReturnValue(lastCourseId);
    // load.mockReturnValue(lastCourseId);

    fireEvent.click(myCourseButton);

    expect(navigateSpy).toHaveBeenCalledWith(`/course/${lastCourseId}`);
    expect(Notify.info).not.toHaveBeenCalled();
  });
});
