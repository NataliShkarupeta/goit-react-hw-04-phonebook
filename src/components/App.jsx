import React from 'react';
import { useState, useEffect } from 'react';
import { InputName } from './Input/InputName';
import { Title } from './NameBlock/NameBlock';
import { Wrap } from './DefaultStylse.styled';
import { nanoid } from 'nanoid';
import { InputFind } from './Input/InputFind';

import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('Contacts')) || []
  );
  const [filter, setFilter] = useState('');

  const addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    setContacts(prev => [...prev, newContact]);
  };

  const nameForFilter = e => {
    setFilter(e.target.value);
  };

  const cangeArreyContacts = () => {
    if (filter.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contacts;
    }
  };

  const onDeleteContact = idContact => {
    setContacts(prev => prev.filter(contact => contact.id !== idContact));
  };

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Title text="Phonebook" />
      <Wrap>
        <InputName contact={contacts} send={addContact} />
      </Wrap>
      <Title text="Contscts" />
      <InputFind filter={filter} find={nameForFilter} />
      <Contacts contact={cangeArreyContacts()} onDelete={onDeleteContact} />
    </>
  );
};


