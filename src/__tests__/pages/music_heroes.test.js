import { render, screen } from '@testing-library/react';
import Music_Heroes from '../../pages/Music_Heroes';

test('renders learn react link', () => {
  render(<Music_Heroes />);
  const linkElement = screen.getByText(/Music_Heroes/i);
  expect(linkElement).toBeInTheDocument();
});