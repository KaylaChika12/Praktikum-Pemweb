import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';

test('filters books correctly', () => {
  const setFilter = jest.fn();
  render(<BookFilter filter="" setFilter={setFilter} />);

  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: 'beli' }
  });

  expect(setFilter).toHaveBeenCalledWith('beli');
});
