import { initialState } from './State';
import {
  SAVE_USER,
  SAVE_ALL_USER
} from './Const';

const User = (state = initialState, action) => {
 
  switch (action.type) {
    case SAVE_USER: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        NewUser: response
      });
    }
    case SAVE_ALL_USER: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        AllUser: [...state.AllUser,response]
      });
    }
    default:
      return state;
  }
}


export {
  User
}
