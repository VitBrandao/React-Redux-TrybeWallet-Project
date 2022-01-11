import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      value: '0',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: '',
      buttonClicked: false,
      totalValue: 0,
    };

    this.addExpense = this.addExpense.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  addExpense() {
    // Primeiro, atualizando valor total 
    const { value, totalValue } = this.state;
    this.setState({
      buttonClicked: true,
      totalValue: Number(totalValue) + Number(value), 
    });
  };

  onInputChange({ target }){
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { userEmail: { email } } = this.props;
    const { totalValue, buttonClicked } = this.state;
    return (
      <div>
        <div>TrybeWallet</div>

        <header>
          <p data-testid="email-field">{ email }</p>

          <p data-testid="total-field"> { buttonClicked ? totalValue : '0' } </p>

          <p data-testid="header-currency-field"> BRL </p>
        </header>

        <form>
          <label htmlFor="value">
            Valor da despesa:
            <input
              name="value"
              data-testid="value-input"
              onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              name="description"
              data-testid="description-input"
              onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <input
              name="currency"
              data-testid="currency-input"
              onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="method">
            Pagamento:
            <select 
              name="method" 
              data-testid="method-input"
              onChange={ this.onInputChange }
            >
              <option value="Dinheiro"> Dinheiro </option>
              <option value="Cartão de credito"> Cartão de crédito </option>
              <option value="Cartão de débito"> Cartão de débito </option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select 
              name="tag" 
              data-testid="tag-input"
              onChange={ this.onInputChange }
            >
              <option value="Alimentação"> Alimentação </option>
              <option value="Lazer"> Lazer </option>
              <option value="Trabalho"> Trabalho </option>
              <option value="Transporte"> Transporte </option>
              <option value="Saúde"> Saúde </option>
            </select>
          </label>

          <button
            type="button"
            onClick={ this.addExpense }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.shape({ email: PropTypes.string.isRequired }).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user,
});

export default connect(mapStateToProps, null)(Wallet);
