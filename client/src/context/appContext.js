import { useReducer, useContext, createContext } from 'react';
import axios from 'axios';
import reducer from './reducer';
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
  GET_SUBSCRIPTIONS_BEGIN,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_ERROR,
} from './actions';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

const initialState = {
  isLoading: false,
  showAlert: false,
  alert: { type: '', message: '' },
  user: user ? JSON.parse(user) : null,
  token: token,
  showSidebar: true,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Axios config
  // TODO move to separate file
  const authFetch = axios.create({
    baseURL: '/api/v1/',
  });

  // alternative way to add token to header
  // authFetch.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;

  /* Adding the token to the header of the request. */
  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  /* Adding the token to the header of the response. */
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response);
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = (message) => {
    dispatch({
      type: DISPLAY_ALERT,
      payload: { message: message || 'Unexpected Error' },
    });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 1500);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const registerUser = async (newUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/register', newUser);
      const { user, token } = response.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } });

      if (!user || !token) {
        throw new Error('User or token not found');
      }

      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { message: error.response.data.message },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/login', currentUser);
      const { user, token } = response.data;

      if (!user || !token) {
        throw new Error('User or token not found');
      }

      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { message: error.response?.data?.message || 'Login failed' },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('/api/v1/subscriptions', currentUser);
      const { user, token } = data;

      if (!user || !token) {
        throw new Error('User or token not found');
      }

      dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response?.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: {
            message:
              error.response?.data?.message || 'Updating user data failed',
          },
        });
      }
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  //do we want to consider optional parameters at all?
  const getSubscriptions = async (type, query) => {
    try{
      dispatch({ type: GET_SUBSCRIPTIONS_BEGIN });
      //Follow the same pattern as user login? Loading might be good.
      //Need to add to body, params, etc the type of sorting: alphabetical, payment due, and cost
      const { data } = await axios.get('/subscriptions', );
      const { subscriptions } = data;
      
      dispatch({
        type: GET_SUBSCRIPTIONS_SUCCESS,
        payload: { subscriptions }
      });
    }
    catch(err){
      dispatch( {
        type: GET_SUBSCRIPTIONS_ERROR,
        payload: {
          message:
            error.response?.data?.message || 'Failed to retrieve sorted subscription data.'
        }
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        getSubscriptions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to use app context
const useAppContext = () => useContext(AppContext);

export { initialState, AppProvider, useAppContext };
