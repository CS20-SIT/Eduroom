import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from './types';

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, err: null };
    case LOGIN_USER_FAIL:
      const newState = { ...state, user: null, err: action.payload };
      return newState;
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload };
    case REGISTER_USER_FAIL:
      return { ...state, err: action.payload };
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    case GET_USER_FAIL:
      return state;
    case LOGOUT_USER_SUCCESS:
      return { ...state, user: null };
    case LOGOUT_USER_FAIL:
      return { ...state, err: 'Logout user fail' };
    default:
      return state;
  }
};

export default userReducer;
