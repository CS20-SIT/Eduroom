import { UPDATE_Y } from './types';

const navReducer = (state,action) => {
  switch (action.type) {
    case UPDATE_Y:
      return { ...state, y: action.payload };
    default:
      return state;
  }
}

export default navReducer;