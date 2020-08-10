import { combineReducers } from 'redux';
import useTheme from './theme';

const rootReducer = combineReducers({
    theme: useTheme
});

export default rootReducer;