import {accomodationReducer as accommodation} from 'universal/accommodation/state';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  accommodation,
  form: formReducer,
});
