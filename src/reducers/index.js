import { combineReducers } from 'redux';
import cocktailReducer from './cocktaiReducer';

export default combineReducers({
    cocktails: cocktailReducer
})