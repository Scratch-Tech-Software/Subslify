import { useReducer, useContext, createContext } from 'react';

import reducer from './reducer';
import {
  DISPLAY_ALERT,
  REMOVE_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alert: { type: '', message: '' },
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    removeAlert();
  };

  const removeAlert = () => {
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 1500);
  };

  const registerUser = async (user) => {
    console.log(user);
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, removeAlert, registerUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to use app context
const useAppContext = () => useContext(AppContext);

export { initialState, AppProvider, useAppContext };
