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
    console.log(value);
    this.setState({ [name]: value });
  };

  makeNewUser = () => {
    if (this.state.contacts.some(item => item.name === this.state.name)) {
      return alert('ups');
    }

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

  handleFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getUser = () => {
    const { contacts } = this.state;
    const userLower = this.state.filter.toLowerCase();

    return contacts.filter(item => item.name.toLowerCase().includes(userLower));
  };

  render() {
    const { name, number } = this.state;

    const visibleUser = this.getUser();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          makeNewUser={this.makeNewUser}
          handleDataUser={this.handleDataUser}
          valueName={name}
          valueNumber={number}
        />

        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} value={this.state.filter} />
        <ContactList users={visibleUser} />
      </>
    );
  }
}
