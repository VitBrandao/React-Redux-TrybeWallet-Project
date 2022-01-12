import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, walletAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
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

  // componentDidMount() {
  //   const { dispatchToFetch } = this.props;
  //   const fetchResults = dispatchToFetch();
  //   console.log(fetchResults);
  // }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Funçao do clique do botão
  addExpense() {
    // Primeiro, atualizando valor total
    const { value, totalValue, id } = this.state;
    // const { fetchResults } = this.props;
    this.setState({
      buttonClicked: true,
      totalValue: Number(totalValue) + Number(value),
      id: Number(id) + 1,
      // exchangeRates: fetchResults,
    });

    // Agora, dispatch para atualizaçao do estado global
    const { dispatchToFetch } = this.props;
    dispatchToFetch(this.state);
  }

  render() {
    const { userEmail: { email } } = this.props;
    const { totalValue, buttonClicked } = this.state;
    // const { fetchResults } = this.props;

    return (
      <div>
        <div>TrybeWallet</div>

        <header>
          <p data-testid="email-field">{ email }</p>

          <p data-testid="total-field">
            { buttonClicked ? totalValue : '0' }
          </p>

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
            <select
              name="currency"
              data-testid="currency-input"
              onChange={ this.onInputChange }
            >
              <option value="USD" data-testid="USD"> USD </option>
              <option value="CAD" data-testid="CAD"> CAD </option>
              <option value="EUR" data-testid="EUR"> EUR </option>
              <option value="GBP" data-testid="GBP"> GBP </option>
              <option value="ARS" data-testid="ARS"> ARS </option>
              <option value="BTC" data-testid="BTC"> BTC </option>
              <option value="LTC" data-testid="LTC"> LTC </option>
              <option value="JPY" data-testid="JPY"> JPY </option>
              <option value="CHF" data-testid="CHF"> CHF </option>
              <option value="AUD" data-testid="AUD"> AUD </option>
              <option value="CNY" data-testid="CNY"> CNY </option>
              <option value="ILS" data-testid="ILS"> ILS </option>
              <option value="ETH" data-testid="ETH"> ETH </option>
              <option value="XRP" data-testid="XRP"> XRP </option>
            </select>
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
  dispatchToAction: PropTypes.func.isRequired,
  dispatchToFetch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchToAction: (state) => dispatch(walletAction(state)),
  dispatchToFetch: (state) => dispatch(fetchCurrency(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
