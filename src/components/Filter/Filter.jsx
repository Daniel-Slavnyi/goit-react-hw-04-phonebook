import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, Span } from './Filter.styled';

export default function Filter({ handleFilter, value }) {
  return (
    <Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilter}
        value={value}
        placeholder=" "
      />
      <Span>Name</Span>
    </Label>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
