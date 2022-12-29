import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Wrapper, Title } from './App.styled';

import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ]);
  const [filter, setFilter] = useState('');

  const makeNewUser = obj => {
    if (
      contacts.some(item => item.name.toLowerCase() === obj.name.toLowerCase())
    ) {
      return alert(`${obj.name} is already in contacts`);
    }

    setContacts(prevState => {
      return [...prevState, obj];
    });
  };

  const handleFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getUser = () => {
    const userLower = filter.toLowerCase().trim();

    return contacts.filter(item =>
      item.name.toLowerCase().trim().includes(userLower)
    );
  };

  const deleteUser = idUser => {
    setContacts(prevState => {
      return prevState.filter(el => el.id !== idUser);
    });
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm makeNewUser={makeNewUser} />

      <Title>Contacts</Title>
      <Filter handleFilter={handleFilter} value={filter} />
      <ContactList users={getUser()} deleteUser={deleteUser} />
    </Wrapper>
  );
}
