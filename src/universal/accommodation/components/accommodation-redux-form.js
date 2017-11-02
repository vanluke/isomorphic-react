import {reduxForm} from 'redux-form';
import AccommodationForm from './accommodation-form';

const accommodationReduxForm = reduxForm({
  form: 'accommodation-form',
  touchOnChange: true,
  enableReinitialize: true,
  pure: false, // TODO: replace it true
})(AccommodationForm);

export default accommodationReduxForm;
