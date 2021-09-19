import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducers from './postReducers'

const rootReducer = combineReducers({
    posts: postReducers,
    form: formReducer
});

export default rootReducer;