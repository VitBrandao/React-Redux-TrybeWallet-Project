import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <th> Descrição </th>

            <th> Tag </th>

            <th> Método de pagamento </th>

            <th> Valor </th>

            <th> Moeda </th>

            <th> Câmbio utilizado </th>

            <th> Valor convertido </th>

            <th> Moeda de conversão </th>

            <th> Editar/Excluir </th>
          </thead>
        </table>
      </div>
    );
  }
}

export default Table;
