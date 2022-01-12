import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, fetchOptions, walletAction } from '../actions';

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
    };

    this.addExpense = this.addExpense.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.getTotalValue = this.getTotalValue.bind(this);
  }

  componentDidMount() {
    const { fetchOptions } = this.props;
    fetchOptions(); // preenchendo 'currencies' com keys da API
  }

  getTotalValue() {
    return 'entrou!';
  }

  // Função para salvar estados locais
  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Funçao do clique do botão
  addExpense() {
    // Primeiro, atualizando o id
    const { id } = this.state;
    this.setState({
      id: Number(id) + 1,
    });

    // Agora, dispatch para atualizaçao do estado global
    const { dispatchToFetch } = this.props;
    dispatchToFetch(this.state);
    // const { exchangeRatesAPI } = this.props;
    // console.log(exchangeRatesAPI);
  }

  render() {
    const { userEmail: { email } } = this.props;
    const { exchangeRatesAPI, currenciesOptions } = this.props;
    // console.log(exchangeRatesAPI);
  
    return (
      <div>
        <div>TrybeWallet</div>

        <header>
          <p data-testid="email-field">{ email }</p>

          <p data-testid="total-field"> {exchangeRatesAPI ? this.getTotalValue() : '0'} </p>

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
              {currenciesOptions.map((coin, index) => {
                if (index !== 1 && index !== 15) {
                  return (
                    <option
                      key={index}
                      value={coin}
                      data-testid={coin}
                    >
                      {coin}
                    </option>)
                }})
              }
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
  exchangeRatesAPI: state.wallet.expenses[0],
  currenciesOptions: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchToAction: (state) => dispatch(walletAction(state)),
  dispatchToFetch: (state) => dispatch(fetchCurrency(state)),
  fetchOptions: ()  => dispatch(fetchOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
