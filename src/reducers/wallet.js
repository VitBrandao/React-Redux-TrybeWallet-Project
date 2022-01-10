export const ADD_EXPENSES = 'ADD_EXPENSES';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: []
  }
}

export const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXPENSES:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
