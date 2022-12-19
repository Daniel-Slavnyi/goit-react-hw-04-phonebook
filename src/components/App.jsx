import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleDataUser = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  makeNewUser = () => {
    const newUser = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newUser],
      };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          makeNewUser={this.makeNewUser}
          handleDataUser={this.handleDataUser}
        />

        <h2>Contacts</h2>
        <Filter />
        <ContactList users={contacts} />
      </>
    );
  }
}
