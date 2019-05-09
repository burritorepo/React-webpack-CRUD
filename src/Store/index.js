import { createStore } from 'redux';
import { User } from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(User, composeWithDevTools());

export {
  store
}
