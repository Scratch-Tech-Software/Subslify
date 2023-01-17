import { useAppContext } from '../context/appContext';
const Alert = () => {
  const { alert } = useAppContext();
  // TODO: Use the global state to display an alert if there is an error
  // TODO: Use the global state to display an alert if there is a success
  // TODO: Use p tag to display the message
  return <div className={`alert alert-${alert.type}`}>{alert.message}</div>;
};

export default Alert;
