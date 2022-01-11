import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true,
      email: '',
      isEmailValid: false,
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onEmailChange({ target }) {
    this.setState({
      email: target.value,
    });

    // Aprendi essa forma de validar email aqui:
    // https://www.w3resource.com/javascript/form/email-validation.php
    // E a melhor opção para passar o requisito e driblar o lint, achei aqui:
    // https://bit.ly/3f8WQqD (Stack Overflow - link encurtado)

    const mailformat = /\S+@\S+\.\S+/;

    if (target.value.match(mailformat)) {
      this.setState({
        isEmailValid: true,
      });
    } else {
      this.setState({
        isEmailValid: false,
        isDisabled: true,
      });
    }
  }

  onPasswordChange({ target }) {
    const { isEmailValid } = this.state;
    const minLength = 6;
    if (target.value.length >= minLength && isEmailValid === true) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  onButtonClick() {
    const { dispatchToAction } = this.props;
    const { email } = this.state;
    dispatchToAction(email);

    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        <h1>LOGIN</h1>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.onEmailChange }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.onPasswordChange }
          />
        </label>

        <button
          type="submit"
          disabled={ isDisabled }
          onClick={ this.onButtonClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchToAction: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
  // history: PropTypes.shape({
  //   length: PropTypes.number.isRequired,
  //   scrollRestoration: PropTypes.string.isRequired,
  //   state: PropTypes.string.isRequired,
  // }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchToAction: (state) => dispatch(userAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
