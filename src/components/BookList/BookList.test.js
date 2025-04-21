import { render, screen } from '@testing-library/react';
import BookList from './BookList';

test('renders book list', () => {
  const books = [
    { id: '1', title: 'Test Buku', author: 'Penulis', status: 'baca' }
  ];

  render(<BookList books={books} onEdit={() => {}} onDelete={() => {}} />);

  expect(screen.getByText(/test buku/i)).toBeInTheDocument();
});

