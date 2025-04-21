import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../../context/BookContext';

const BookList = ({ filter, setSelectedBook }) => {
  const { books, dispatch } = useContext(BookContext);

  const filteredBooks = books.filter(book =>
    filter === 'semua' || book.status === filter
  );

  return (
    <div className="container">
      <h2>Daftar Buku</h2>
      {filteredBooks.length === 0 ? (
        <p>Tidak ada buku untuk ditampilkan.</p>
      ) : (
        filteredBooks.map(book => (
          <div key={book.id} className="book-item">
            <div>
              <strong>{book.title}</strong> oleh {book.author}
              <div className="status">Status: {book.status}</div>
            </div>
            <div>
              <button onClick={() => setSelectedBook(book)}>Edit</button>
              <button onClick={() => dispatch({ type: 'DELETE_BOOK', payload: book.id })}>Hapus</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

BookList.propTypes = {
  filter: PropTypes.string.isRequired,
  setSelectedBook: PropTypes.func.isRequired,
};

export default BookList;
