import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';

const Home = () => {
  const [filter, setFilter] = useState('semua');
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <h1>Manajemen Buku</h1>
      <BookForm selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
      <BookFilter filter={filter} setFilter={setFilter} />
      <BookList filter={filter} setSelectedBook={setSelectedBook} />
    </>
  );
};

export default Home;
