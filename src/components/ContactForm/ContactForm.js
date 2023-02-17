import { Component } from 'react';
import { Input, Button, Form } from './ContactForm.styled';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {
    onAddProduct: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    this.setState({
      [inputName]: inputValue,
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onAddProduct(contact);

    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleInputChange}
          required
        />
        <Input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.handleInputChange}
          required
        />
        <Button>Add contact</Button>
      </Form>
    );
  }
}
