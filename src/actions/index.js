import { ADD_INFORMATION } from '../reducers/user';
import { ADD_EXPENSES } from '../reducers/wallet';
import { ADD_OPTIONS } from '../reducers/wallet';

export const userAction = (payload) => ({
  type: ADD_INFORMATION,
  payload,
});

export const walletAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const optionsAction = (payload) => ({
  type: ADD_OPTIONS,
  payload
})

export function fetchCurrency(payload) {
  return (dispatch) => {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(walletAction({ ...payload, exchangeRates: data })))
      .catch((error) => console.log(error))
  };
}

export function fetchOptions() {
  return (dispatch) => {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(optionsAction(data)))
      .catch((error) => console.log(error))
  };
}