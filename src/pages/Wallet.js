import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userEmail: { email } } = this.props;
    return (
      <div>
        <div>TrybeWallet</div>

        <header>
          <p data-testid="email-field">{ email }</p>

          <p data-testid="total-field"> 0 </p>

          <p data-testid="header-currency-field"> BRL </p>
        </header>

        <form>
          <label htmlFor="despesa">
            Valor da despesa:
            <input
              name="despesa"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="descricaoDespesa">
            Descrição:
            <input
              name="descricaoDespesa"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="moeda">
            Moeda:
            <input
              name="moeda"
              data-testid="currency-input"
            />
          </label>

          <label htmlFor="metodoPagamento">
            Pagamento:
            <select name="metodoPagamento" data-testid="method-input">
              <option value="dinheiro"> Dinheiro </option>
              <option value="credito"> Cartão de crédito </option>
              <option value="debito"> Cartão de débito </option>
            </select>
          </label>

          <label htmlFor="categoria">
            Categoria:
            <select name="categoria" data-testid="tag-input">
              <option value="alimentaçao"> Alimentação </option>
              <option value="lazer"> Lazer </option>
              <option value="trabalho"> Trabalho </option>
              <option value="transporte"> Transporte </option>
              <option value="saude"> Saúde </option>
            </select>
          </label>

          <button type="submit">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user,
});

export default connect(mapStateToProps, null)(Wallet);
