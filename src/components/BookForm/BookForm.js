import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../../context/BookContext';

const BookForm = ({ selectedBook, setSelectedBook }) => {
  const { dispatch } = useContext(BookContext);
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    author: '',
    status: 'milik'
  });

  useEffect(() => {
    if (selectedBook) {
      setFormData(selectedBook);
    }
  }, [selectedBook]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.title || !formData.author) {
      return alert('Semua field wajib diisi!');
    }

    if (formData.id) {
      dispatch({ type: 'UPDATE_BOOK', payload: formData });
    } else {
      dispatch({ type: 'ADD_BOOK', payload: { ...formData, id: Date.now() } });
    }

    setFormData({ id: null, title: '', author: '', status: 'milik' });
    setSelectedBook(null);
  };

  return (
    <div className="container">
      <h2>{formData.id ? 'Edit Buku' : 'Tambah Buku'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Judul"
          required
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Penulis"
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="milik">Milik</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
        <button type="submit">{formData.id ? 'Update' : 'Tambah'}</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  selectedBook: PropTypes.object,
  setSelectedBook: PropTypes.func.isRequired,
};

export default BookForm;
