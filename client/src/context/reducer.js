import {
  DISPLAY_ALERT,
  REMOVE_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  TOGGLE_SIDEBAR,
} from './actions';

import { initialState } from './appContext';

// TODO: Refactor this to use a switch statement

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alert: {
        type: 'danger',
        message: action.payload.message || 'Unexpected Error',
      },
    };
  }

  if (action.type === REMOVE_ALERT) {
    return {
      ...state,
      showAlert: false,
      alert: { type: '', message: '' },
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
      token: action.payload.token,
      showAlert: true,
      alert: { type: 'success', message: 'User registered successfully!' },
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alert: {
        type: 'danger',
        message:
          action.payload.message ||
          'Unexpected Error. User could not be registered.',
      },
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alert: { type: 'success', message: 'Login Successful! Redirecting...' },
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alert: {
        type: 'danger',
        message:
          action.payload.message ||
          'Unexpected Error. User could not be logged in.',
      },
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alert: { type: 'success', message: 'User updated successfully!' },
    };
  }

  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alert: {
        type: 'danger',
        message:
          action.payload.message ||
          'Unexpected Error. User could not be updated.',
      },
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }

  throw new Error(`Unhandled action type: ${action.type}`);
};

export default reducer;
