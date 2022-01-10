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
