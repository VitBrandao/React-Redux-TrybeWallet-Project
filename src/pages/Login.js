import React from 'react';

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

    // Encontrei essa forma de validar email aqui:
    // https://www.w3resource.com/javascript/form/email-validation.php
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(target.value.match(mailformat)) {
      this.setState({
        isEmailValid: true,
      }) 
    } else {
      this.setState({
        isEmailValid: false,
        isDisabled: true,
      })
    }
  }

  onPasswordChange({ target }) {
    const { isEmailValid } = this.state;
    const minLength = 6;
    if(target.value.length >= minLength && isEmailValid === true){
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
    const { history } = this.props;
    history.push("/carteira");
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        <h1>LOGIN</h1>

        <label>
          E-mail:
          <input 
            type='email' 
            data-testid="email-input"
            onChange={ this.onEmailChange }
          />
        </label>

        <label>
          Senha:
          <input 
            type='password' 
            data-testid="password-input"
            onChange={this.onPasswordChange}  
          />
        </label>

        <button 
          type='submit' 
          disabled={ isDisabled }
          onClick={ this.onButtonClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
