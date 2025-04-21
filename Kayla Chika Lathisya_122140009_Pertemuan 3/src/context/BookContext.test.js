import { renderHook, act } from '@testing-library/react';
import { BookProvider, useBooks } from './BookContext';
import { createWrapper } from '../../test-utils';

test('adds a book to context', () => {
  const wrapper = createWrapper(BookProvider);
  const { result } = renderHook(() => useBooks(), { wrapper });

  act(() => {
    result.current.addBook({ id: '123', title: 'Test', author: 'Penulis', status: 'baca' });
  });

  expect(result.current.books.length).toBe(1);
});