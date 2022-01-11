export const ADD_EXPENSES = 'ADD_EXPENSES';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};
