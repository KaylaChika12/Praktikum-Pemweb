import { useMemo } from 'react';

const useBookStats = (books) => {
  return useMemo(() => {
    return {
      total: books.length,
      milik: books.filter(book => book.status === 'milik').length,
      baca: books.filter(book => book.status === 'baca').length,
      beli: books.filter(book => book.status === 'beli').length,
    };
  }, [books]);
};

export default useBookStats;