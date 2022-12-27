import React from 'react';
import PropTypes from 'prop-types';
import { UlList, Button, Item } from './ContactList.styled';

export default function ContactList({ users, deleteUser }) {
  return (
    <UlList>
      {users.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name} : {number}
          </p>
          <Button
            type="button"
            onClick={() => {
              deleteUser(id);
            }}
          ></Button>
        </Item>
      ))}
    </UlList>
  );
}
ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
