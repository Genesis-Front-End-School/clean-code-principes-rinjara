import { render } from '@testing-library/react';
import { Outlet } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  Outlet: jest.fn(() => null),
  useNavigate: jest.fn(() => null),
}));

describe('SharedLayout', () => {
  it('should render AppBar with NavBar', () => {
    const { getByRole } = render(<SharedLayout />);
    const appBarElement = getByRole('banner');
    const navBarElement = getByRole('navigation');
    expect(appBarElement).toBeInTheDocument();
    expect(navBarElement).toBeInTheDocument();
  });

  it('should render Suspense with Loader', () => {
    const { getByLabelText } = render(<SharedLayout />);
    const suspenseElement = getByLabelText('loader');
    expect(suspenseElement).toBeInTheDocument();
  });

  it('should render Outlet', () => {
    render(<SharedLayout />);
    expect(Outlet).toHaveBeenCalled();
  });
});
