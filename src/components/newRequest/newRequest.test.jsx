import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NewRequest } from '.';

describe('<NewRequest />', () => {
  it('should render', () => {
    renderTheme(<NewRequest>children</NewRequest>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
