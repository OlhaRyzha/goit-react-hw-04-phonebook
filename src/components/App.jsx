import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Title } from './Title/Title';
import { nanoid } from 'nanoid';
import storage from 'helpers/storage';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = storage.load('contacts-list') ?? CONTACTS;
    this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.save('contacts-list', contacts);
      console.log(contacts);
    }
  }
  addProduct = contact => {
    if (this.state.contacts.some(p => p.name === contact.name)) {
      alert(`Contact ${contact.title} is already exists!`);
      return;
    }
    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState({
      contacts: [finalContact, ...this.state.contacts],
    });
    console.log(this.state.contacts);
  };
  deleteProduct = productId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== productId),
    });
  };

  handleFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normaliseFilter = filter.trim().toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normaliseFilter);
    });
  };
  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <Title message="Phonebook" />
        <ContactForm onAddProduct={this.addProduct} />
        <Title message="Contacts" />
        <Filter onChangeFilter={this.handleFilter} value={this.state.filter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteProduct={this.deleteProduct}
        />
      </>
    );
  }
}
