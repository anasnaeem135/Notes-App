import ListReducer from './ListReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    List: ListReducer,
});
