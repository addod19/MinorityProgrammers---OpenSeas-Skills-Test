import { render, screen } from '@testing-library/react';
import Muddy_Waters from '../../pages/Muddy_Waters';

test('renders learn react link', () => {
  render(<Muddy_Waters />);
  const linkElement = screen.getByText(/Muddy_Waters/i);
  expect(linkElement).toBeInTheDocument();
});