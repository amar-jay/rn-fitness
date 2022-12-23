import { combineReducers } from 'redux';
import home from './homeContext';
import settings from './settingsContext';
import library from './libraryContext';

const rootReducer = combineReducers({
  home,
  settings,
  library
});

export default rootReducer;