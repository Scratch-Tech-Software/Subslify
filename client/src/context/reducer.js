import {
  DISPLAY_ALERT,
  REMOVE_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from './actions';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alert: { type: 'danger', msg: 'Please provide all values!' },
    };
  }

  if (action.type === REMOVE_ALERT) {
    return {
      ...state,
      showAlert: false,
      alert: { type: '', msg: '' },
    };
  }

  throw new Error(`Unhandled action type: ${action.type}`);
};

export default reducer;
