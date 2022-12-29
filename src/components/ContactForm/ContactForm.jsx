import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Input, Button, Bg, Label, Span } from './ContactForm.styled';

export default function ContactForm({ makeNewUser }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleDataUser = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const makeObjNewUser = e => {
    e.preventDefault();

    const newUser = {
      id: nanoid(),
      name,
      number,
    };

    makeNewUser(newUser);

    setName('');
    setNumber('');
  };

  return (
    <Form action="" onSubmit={makeObjNewUser}>
      <Bg />
      <Label>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleDataUser}
          placeholder=" "
        />
        <Span>Name</Span>
      </Label>
      <Label>
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleDataUser}
          placeholder=" "
        />
        <Span>Number</Span>
      </Label>
      <Button type="submit"></Button>
    </Form>
  );
}

ContactForm.propTypes = {
  makeNewUser: PropTypes.func.isRequired,
};
