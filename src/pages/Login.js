import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true,
    };
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        <h1>LOGIN</h1>

        <label>
          E-mail:
          <input type='text' data-testid="email-input" />
        </label>

        <label>
          Senha:
          <input type='text' data-testid="password-input" />
        </label>

        <button type='submit' disabled={ isDisabled }>Entrar</button>
      </div>
    );
  }
}

export default Login;
