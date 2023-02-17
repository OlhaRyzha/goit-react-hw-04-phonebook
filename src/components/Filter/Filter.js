import { Input } from './Filter.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';
export class Filter extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
  };
  render() {
    return (
      <>
        <Input
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.onChangeFilter}
        />
      </>
    );
  }
}
