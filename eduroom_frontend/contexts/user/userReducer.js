import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from './types';

const userReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      console.log('inside reducer');
      console.log(action.payload);
      return { ...state, user: action.payload };
    case REGISTER_USER_FAIL:
      return state;
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    case GET_USER_FAIL:
      return state;
    default:
      return state;
  }
};

export default userReducer;
