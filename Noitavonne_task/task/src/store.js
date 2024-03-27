import { createStore } from 'redux';
import rootReducer from './features/root';

const store = createStore(rootReducer);

export default store;
