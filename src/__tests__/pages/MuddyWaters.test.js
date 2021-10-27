import { render, screen } from '@testing-library/react';
import MuddyWaters from '../../pages/MuddyWaters';

test('renders learn react link', () => {
  render(<MuddyWaters />);
  const linkElement = screen.getByText(/Muddy_Waters/i);
  expect(linkElement).toBeInTheDocument();
});
