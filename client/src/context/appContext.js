import { useReducer, useContext, createContext } from 'react';

import reducer from './reducer';
import { DISPLAY_ALERT, REMOVE_ALERT } from './actions';

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

  return (
    <AppContext.Provider value={{ ...state, displayAlert, removeAlert }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook to use app context
const useAppContext = () => useContext(AppContext);

export { initialState, AppProvider, useAppContext };
