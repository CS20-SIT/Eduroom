import React, { useReducer } from 'react';
import userReducer from './userReducer';
import UserContext from './userContext';
import api from '../../api';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from './types';
const userState = (props) => {
  const initialState = { user: null };
  const [state, dispatch] = useReducer(userReducer, initialState);
  const registerUser = async ({ firstname, lastname, email, password }) => {
    try {
      const res = { firstname, lastname, email, money: 0, verified: false };
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res });
    } catch (err) {
      dispatch({ type: REGISTER_USER_FAIL, payload: err });
    }
  };

  const loginUser = async ({ email, password }) => {};

  return (
    <UserContext.Provider value={{ user: state.user, registerUser, loginUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default userState;
