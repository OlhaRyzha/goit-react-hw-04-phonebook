import { Component } from 'react';
import { MainTitle } from './Title.styled';
import PropTypes from 'prop-types';

export class Title extends Component {
  static propTypes = {
    message: PropTypes.string,
  };
  render() {
    return <MainTitle>{this.props.message}</MainTitle>;
  }
}
