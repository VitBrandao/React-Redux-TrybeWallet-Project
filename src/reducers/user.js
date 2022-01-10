export const ADD_INFORMATION = 'ADD_INFORMATION';

const INITIAL_STATE = {
  user: {
    email: '',
  }
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_INFORMATION:
    return {...state, ...action.payload}  
  default:
    return state;
  }
}
