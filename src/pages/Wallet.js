import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, fetchOptions } from '../actions';
import Table from './Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: '',
    };

    this.addExpense = this.addExpense.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    const { fetchOptionsDispatch } = this.props;
    fetchOptionsDispatch(); // preenchendo 'currencies' com keys da API
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

    this.setState({
      value: '0',
    });
  }

  render() {
    const { userEmail: { email } } = this.props;
    const { totalValue, currenciesOptions } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div>TrybeWallet</div>

        <header>
          <p data-testid="email-field">{ email }</p>

          <p data-testid="total-field">
            { totalValue === undefined ? 0 : totalValue }
          </p>

          <p data-testid="header-currency-field"> BRL </p>
        </header>

        <form>
          <label htmlFor="value">
            Valor da despesa:
            <input
              name="value"
              id="value"
              aria-label="value"
              data-testid="value-input"
              value={ value }
              onChange={ this.onInputChange }
              type="number"
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
            Moeda
            <select
              name="currency"
              id="currency"
              data-testid="currency-input"
              onChange={ this.onInputChange }
              aria-label="Moeda"
            >
              {currenciesOptions.map((coin, index) => (
                <option
                  key={ index }
                  value={ coin.code }
                >
                  { coin.code }
                </option>))}
              ,
            </select>
          </label>

          <label htmlFor="method">
            Pagamento:
            <select
              name="method"
              id="method"
              data-testid="method-input"
              onChange={ this.onInputChange }
              aria-label="method"
            >
              <option value="Dinheiro"> Dinheiro </option>
              <option value="Cartão de crédito"> Cartão de crédito </option>
              <option value="Cartão de débito"> Cartão de débito </option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select
              name="tag"
              id="tag"
              aria-label="tag"
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

        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.shape({ email: PropTypes.string.isRequired }).isRequired,
  dispatchToFetch: PropTypes.func.isRequired,
  fetchOptionsDispatch: PropTypes.func.isRequired,
  totalValue: PropTypes.string.isRequired,
  currenciesOptions: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user,
  globalExpenses: state.wallet.expenses,
  currenciesOptions: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  totalValue: state.wallet.totalExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchToFetch: (state) => dispatch(fetchCurrency(state)),
  fetchOptionsDispatch: () => dispatch(fetchOptions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
