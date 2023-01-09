import { useState, useReducer, useContext, createContext } from 'react';
import { Alert } from '../components/index';

const initialState = {
  isLoading: false,
  showAlert: false,
  alert: { type: '', message: '' },
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ ...state }}> {children} </AppContext.Provider>
  );
};

// custom hook to use app context
const useAppContext = () => useContext(AppContext);

export { initialState, AppProvider, useAppContext };
