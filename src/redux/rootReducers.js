import { combineReducers } from 'redux';
import  PostReducers  from './reducers/PostReducers';

const rootReducers = combineReducers({
  postReducers:	PostReducers,
});

export default rootReducers;
