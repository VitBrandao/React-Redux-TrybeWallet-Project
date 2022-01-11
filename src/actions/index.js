import { ADD_INFORMATION } from '../reducers/user';
import { ADD_EXPENSES, ADD_EXCHANGE } from '../reducers/wallet';

export const userAction = (payload) => ({
  type: ADD_INFORMATION,
  payload,
});

export const walletAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const fetchAction = (payload) => ({
  type: ADD_EXCHANGE,
  payload,
});

export function fetchCurrency() {
  return (dispatch) => {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(fetchAction(data)));
  };
}
