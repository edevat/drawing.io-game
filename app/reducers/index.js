import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    Register: registerReducer,
    Profile: profileReducer,
});
