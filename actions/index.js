import { ADD_INFORMATION } from '../reducers/user';
import { ADD_EXPENSES, ADD_OPTIONS, REQUEST_FETCH } from '../reducers/wallet';

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
  payload,
});

export const isFetchingAction = () => ({
  type: REQUEST_FETCH,
});

export function fetchCurrency(payload) {
  return (dispatch) => (fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(walletAction({ ...payload, exchangeRates: data })))
    .catch((error) => console.log(error))
  );
}

export function fetchOptions() {
  return (dispatch) => (fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(optionsAction(data)))
    .catch((error) => console.log(error))
  );
}
