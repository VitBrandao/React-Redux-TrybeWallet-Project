export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_OPTIONS = 'ADD_OPTIONS';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload ] };
  case ADD_OPTIONS:
    return {...state, currencies: Object.keys(action.payload)};  
  default:
    return state;
  }
};
