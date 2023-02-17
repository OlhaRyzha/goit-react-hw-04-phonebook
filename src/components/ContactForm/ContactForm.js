import { useState } from 'react';
import { Input, Button, Form } from './ContactForm.styled';

export function ContactForm({ onAddProduct }) {
  const [inputFields, setInutFields] = useState({
    name: '',
    number: '',
  });

  const { name, number } = inputFields;

  const handleInputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    setInutFields(prevState => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = inputFields;

    onAddProduct(contact);
    reset();
  };

  function reset() {
    setInutFields({
      name: '',
      number: '',
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleInputChange}
        required
      />
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleInputChange}
        required
      />
      <Button>Add contact</Button>
    </Form>
  );
}
