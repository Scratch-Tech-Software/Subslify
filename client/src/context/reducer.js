import {
  DISPLAY_ALERT,
  REMOVE_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
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

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alert: { type: 'success', msg: 'User registered successfully!' },
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alert: {
        type: 'danger',
        msg:
          action.payload.msg ||
          'Unexpected Error. User could not be registered.',
      },
    };
  }

  throw new Error(`Unhandled action type: ${action.type}`);
};

export default reducer;
