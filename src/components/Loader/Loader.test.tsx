import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from 'components/Loader';

describe('Loader component', () => {
  it('should render Puff loader', () => {
    const { getByLabelText } = render(<Loader />);
    expect(getByLabelText('puff-loading')).toBeInTheDocument();
  });
});
