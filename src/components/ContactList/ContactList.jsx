import React from 'react';
import PropTypes from 'prop-types';

export default function ContactList({ users, deleteUser }) {
  return (
    <ul>
      {users.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} : {number}
          </p>
          <button
            type="button"
            onClick={() => {
              deleteUser(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
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
