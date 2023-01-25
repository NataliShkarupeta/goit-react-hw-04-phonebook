import { useState } from 'react';
import { Input } from './inputName.styled';
import { Label } from './inputName.styled';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';

export const InputName = ({ contact, send }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const takeInputValue = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    const match = contact.find(
      contact => contact.name === name && contact.number === number
    );
    if (match) {
      alert(`${name} already in contacts!!!`);
    } else {
      send({name,number});
     setName('')
     setNumber('')
    }
  };
  return (
    <>
      <Label htmlFor={name}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={takeInputValue}
          value={name}
          required
        />
      </Label>
      <Label htmlFor={number}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={takeInputValue}
          value={number}
        />
      </Label>
      {name !== '' && number !== '' ? (
        <Button onClicked={handelSubmit} text="Add contact" />
      ) : (
        <Button
          onClicked={handelSubmit}
          text="Add contact"
          disabled="disabled"
        />
      )}
    </>
  );
};

InputName.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.shape),
  send: PropTypes.func.isRequired,
};

