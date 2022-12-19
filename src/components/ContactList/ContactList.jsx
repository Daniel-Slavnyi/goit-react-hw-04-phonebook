import React from 'react';

export default function ContactList({ users }) {
  return (
    <ul>
      {users.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} : {number}
          </p>
        </li>
      ))}
    </ul>
  );
}
