import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/colors';

const Form = styled.form`
  display: flex;
  border-bottom: 2px solid ${colors.red};
  padding-bottom: 5px;
`;

const Button = styled.button`
  align-items: center;
  background-color: ${colors.yellow};
  border-radius: 50%;
  border: 0;
  box-shadow: 2px 1px 0 ${colors.red};
  color: ${colors.red};
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 2rem;
  height: 40px;
  justify-content: center;
  outline: none;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, .8);
  width: 40px;
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  font-family: inherit;
  flex: 1;
  font-size: 1.2rem;
  margin-right: 10px;
  outline: none;
`;

class Component extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
    };
    this.formHandler = this.formHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  formHandler(event) {
    event.preventDefault();
    this.props.addPlayer({
      name: this.state.name,
      score: 0,
    });
    this.setState({ name: '' });
  }

  inputHandler(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.formHandler}>
        <Input onChange={this.inputHandler} required placeholder="Player name" value={this.state.name} />
        <Button>ADD</Button>
      </Form>
    );
  }
}

Component.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default Component;
