import React from 'react';
import { Component } from 'react';
import { InputName } from './Input/InputName';
import { Title } from './NameBlock/NameBlock';
import { Wrap } from './DefaultStylse.styled';
import { nanoid } from 'nanoid';
import { InputFind } from './Input/InputFind';

import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  nameForFilter = e => {
    this.setState({ filter: e.target.value });
  };
  cangeArreyContacts = () => {
    const { filter, contacts } = this.state;
    if (filter.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contacts;
    }
  };

  onDeleteContact = idContact => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  componentDidMount() {
    const contactsFromLs = localStorage.getItem('Contacts');
    const parseContactsFromLs = JSON.parse(contactsFromLs);
    if (parseContactsFromLs) {
      this.setState({ contacts: parseContactsFromLs });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <Title text="Phonebook" />
        <Wrap>
          <InputName contact={this.state.contacts} send={this.addContact} />
        </Wrap>
        <Title text="Contscts" />
        <InputFind filter={this.state.filter} find={this.nameForFilter} />
        <Contacts
          contact={this.cangeArreyContacts()}
          onDelete={this.onDeleteContact}
        />
      </>
    );
  }
}
