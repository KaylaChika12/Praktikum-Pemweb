import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';

test('renders form and submits correctly', () => {
  const handleSubmit = jest.fn();
  render(<BookForm onSubmit={handleSubmit} initialData={null} />);

  fireEvent.change(screen.getByPlaceholderText(/judul/i), {
    target: { value: 'Buku Baru' }
  });
  fireEvent.change(screen.getByPlaceholderText(/penulis/i), {
    target: { value: 'Penulis A' }
  });
  fireEvent.change(screen.getByDisplayValue('milik'), {
    target: { value: 'baca' }
  });

  fireEvent.click(screen.getByText(/simpan/i));

  expect(handleSubmit).toHaveBeenCalled();
});
