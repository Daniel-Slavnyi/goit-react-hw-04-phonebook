// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Wrapper, Title } from './App.styled';

export default class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  makeNewUser = obj => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === obj.name.toLowerCase()
      )
    ) {
      return alert(`${obj.name} is already in contacts`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  handleFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getUser = () => {
    const { contacts } = this.state;
    const userLower = this.state.filter.toLowerCase().trim();

    return contacts.filter(item =>
      item.name.toLowerCase().trim().includes(userLower)
    );
  };

  deleteUser = idUser => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== idUser),
      };
    });
  };

  render() {
    const visibleUser = this.getUser();

    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm makeNewUser={this.makeNewUser} />

        <Title>Contacts</Title>
        <Filter handleFilter={this.handleFilter} value={this.state.filter} />
        <ContactList users={visibleUser} deleteUser={this.deleteUser} />
      </Wrapper>
    );
  }
}
