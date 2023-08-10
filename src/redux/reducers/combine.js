import { combineReducers } from 'redux';
import reducer from '../reducers/reducer';
import moviesReducer from '../reducers/moviesReducer';


export default combineReducers({
  store: reducer,
  movies: moviesReducer,
});

