import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { globalExpenses } = this.props;
    console.log(globalExpenses);
    return (
      <div>
        <table>
          <thead>
            <tr className="tableHeader">
              <th> Descrição </th>
              <th> Tag </th>
              <th> Método de pagamento </th>
              <th> Valor </th>
              <th> Moeda </th>
              <th> Câmbio utilizado </th>
              <th> Valor convertido </th>
              <th> Moeda de conversão </th>
              <th> Editar/Excluir </th>
            </tr>
          </thead>

          <tbody>
            {globalExpenses.map((item, index) => (
              <tr key={ index }>
                <td>
                  {/* Descrição */}
                  { item.description }
                </td>

                <td>
                  {/* Tag */}
                  { item.tag }
                </td>

                <td>
                  {/* Método de Pagamento */}
                  { item.method }
                </td>

                <td>
                  {/* Valor */}
                  { item.value }
                </td>

                <td>
                  {/* Moeda */}
                  { item.exchangeRates[item.currency].name.split('/')[0] }
                </td>

                <td>
                  {/* Câmbio Utilizado */}
                  { Number(item.exchangeRates[item.currency].ask).toFixed(2) }
                </td>

                <td>
                  {/* Valor Convertido */}
                  { (Number(item.value) * Number(item.exchangeRates[item.currency].ask))
                    .toFixed(2) }
                </td>

                <td>
                  {/* Moeda de Conversão */}
                  Real
                </td>

                <td> Editar/Excluir </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  globalExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  globalExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
