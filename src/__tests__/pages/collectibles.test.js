import { render, screen } from '@testing-library/react';
import Collectibles from '../../pages/Collectibles';

test('renders learn react link', () => {
  render(<Collectibles />);
  const linkElement = screen.getByText(/Collectibles/i);
  expect(linkElement).toBeInTheDocument();
});