import React, { useReducer } from 'react';
import userReducer from './userReducer';
import UserContext from './userContext';
import api from '../../api';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './types';
const userState = (props) => {
  const initialState = { user: null };
  const [state, dispatch] = useReducer(userReducer, initialState);
  const registerUser = async (user) => {
    try {
      const res = await api.post('/api/auth/register', user);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: REGISTER_USER_FAIL, payload: err });
    }
  };

  const loginUser = async (body) => {
    try {
      await api.post('/api/auth/login', body);
      const user = await api.get('/api/auth/profile');
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user.data });
    } catch (err) {
      dispatch({ type: LOGIN_USER_FAIL, payload: err });
    }
  };

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
