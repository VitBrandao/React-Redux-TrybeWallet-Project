export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_OPTIONS = 'ADD_OPTIONS';
export const REQUEST_FETCH = 'REQUEST_FETCH';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  totalExpenses: '0',
};

const calculateTotalExpense = (item) => {
  const { value, exchangeRates, currency } = item;

  return (Number(value) * Number(exchangeRates[currency].ask));
};

const handleExpenses = (expense) => {
  if (expense.length === 0) return '0';

  const arrayOfExpenses = expense.map((item) => calculateTotalExpense(item));

  const finalArray = arrayOfExpenses.reduce((acc, curr) => acc + curr).toFixed(2);

  return finalArray;
};

const mountCurrencies = (payload) => {
  const fetchValues = Object.values(payload);

  const finalArray = fetchValues.filter((value) => value.codein !== 'BRLT');

  return finalArray;
};

export const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      totalExpenses: handleExpenses([...state.expenses, action.payload]),
    };
  case ADD_OPTIONS:
    return { ...state, currencies: mountCurrencies(action.payload), totalExpenses: '0' };
  case REQUEST_FETCH:
    return { ...state, isFetching: true };
  default:
    return state;
  }
};
