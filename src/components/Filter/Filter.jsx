import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ handleFilter, value }) {
  return (
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={handleFilter}
      value={value}
    />
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
