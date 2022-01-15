import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { globalExpenses } = this.props;
    console.log(globalExpenses);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
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
