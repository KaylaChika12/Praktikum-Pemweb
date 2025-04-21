import React from 'react';
import { useBooks } from '../../context/BookContext';
import useBookStats from '../../hook/useBookStats';

const Stats = () => {
  const { books } = useBooks();
  const stats = useBookStats(books);

  return (
    <div>
      <h1>Statistik Buku</h1>
      <p>Total Buku: {stats.total}</p>
      <p>Buku Dimiliki: {stats.milik}</p>
      <p>Sedang Dibaca: {stats.baca}</p>
      <p>Ingin Dibeli: {stats.beli}</p>
    </div>
  );
};

export default Stats;
