import React from 'react';
import PropTypes from 'prop-types';

const BookFilter = ({ filter, setFilter }) => {
  return (
    <select value={filter} onChange={e => setFilter(e.target.value)}>
      <option value="semua">Semua</option>
      <option value="milik">Milik</option>
      <option value="baca">Sedang Dibaca</option>
      <option value="beli">Ingin Dibeli</option>
    </select>
  );
};

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default BookFilter;
