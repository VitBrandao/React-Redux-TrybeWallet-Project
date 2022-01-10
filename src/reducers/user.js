export const ADD_INFORMATION = 'ADD_INFORMATION';

const INITIAL_STATE = {
  email: '',
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_INFORMATION:
    return { email: action.payload };
  default:
    return state;
  }
};
