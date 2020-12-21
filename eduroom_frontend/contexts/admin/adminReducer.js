import {
    GET_ADMIN_SUCCESS,
    GET_ADMIN_FAIL,
    LOGIN_ADMIN_SUCCESS,
    LOGIN_ADMIN_FAIL,
    LOGOUT_ADMIN_SUCCESS,
    LOGOUT_ADMIN_FAIL
  } from './types';
  
  const adminReducer = (state, action) => {
    switch (action.type) {
      case LOGIN_ADMIN_SUCCESS:
      case GET_ADMIN_SUCCESS:
      case LOGOUT_ADMIN_SUCCESS:
        return {...state,admin:action.payload,err:null}
      case LOGIN_ADMIN_FAIL:
      case GET_ADMIN_FAIL:
      case LOGOUT_ADMIN_FAIL:
        return {...state,admin:null,err:action.payload}
      default:
        return state;
    }
  };
  
  export default adminReducer;
  