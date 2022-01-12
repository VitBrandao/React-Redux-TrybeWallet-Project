import { ADD_INFORMATION } from '../reducers/user';
import { ADD_EXPENSES } from '../reducers/wallet';

export const userAction = (payload) => ({
  type: ADD_INFORMATION,
  payload,
});

export const walletAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export function fetchCurrency(payload) {
  return (dispatch) => {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(walletAction({ ...payload, exchangeRates: data })));
  };
}
