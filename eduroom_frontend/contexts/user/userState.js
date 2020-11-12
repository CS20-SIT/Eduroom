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
  const registerUser = async (user) => {
    try {
      const res = await api.post('/api/auth/register', user);
      console.log(res.data);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: REGISTER_USER_FAIL, payload: err });
    }
  };

  const loginUser = async ({ email, password }) => {};

  const getUser = async () => {
    try {
      const res = await api.get('/api/auth/profile');
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: GET_USER_FAIL, payload: err });
    }
  };

  return (
    <UserContext.Provider
      value={{ user: state.user, registerUser, loginUser, getUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default userState;
