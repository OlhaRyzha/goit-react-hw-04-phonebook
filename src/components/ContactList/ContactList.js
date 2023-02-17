import { Component } from 'react';
import { Card, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteProduct: PropTypes.func,
  };
  render() {
    return (
      <>
        <Card>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <Button onClick={() => this.props.onDeleteProduct(contact.id)}>
                Delete
              </Button>
            </li>
          ))}
        </Card>
      </>
    );
  }
}
