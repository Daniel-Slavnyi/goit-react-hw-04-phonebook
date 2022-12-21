import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form, Input, Button, Bg, Label, Span } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleDataUser = e => {
    const { name, value } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  makeObjNewUser = e => {
    e.preventDefault();

    const newUser = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.makeNewUser(newUser);
  };

  render() {
    return (
      <Form action="" onSubmit={this.makeObjNewUser}>
        <Bg />
        <Label>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleDataUser}
            placeholder=" "
          />
          <Span>Name</Span>
        </Label>
        <Label>
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleDataUser}
            placeholder=" "
          />
          <Span>Number</Span>
        </Label>
        <Button type="submit"></Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  makeNewUser: PropTypes.func.isRequired,
};
