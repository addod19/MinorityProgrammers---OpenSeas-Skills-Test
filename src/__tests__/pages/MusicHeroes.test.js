import { render, screen } from '@testing-library/react';
import MusicHeroes from '../../pages/MusicHeroes';

test('renders learn react link', () => {
  render(<MusicHeroes />);
  const linkElement = screen.getByText(/Music_Heroes/i);
  expect(linkElement).toBeInTheDocument();
});
