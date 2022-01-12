export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_OPTIONS = 'ADD_OPTIONS';
export const REQUEST_FETCH = 'REQUEST_FETCH';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

export const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload ], isFetching: false };
  case ADD_OPTIONS:
    return {...state, currencies: Object.keys(action.payload)};  
  case REQUEST_FETCH:
    return {...state, isFetching: true}  
  default:
    return state;
  }
};
