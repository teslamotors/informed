import { useContext } from 'react';
import AppContext from '../context/AppContext.jsx';

function useApp() {
  const appContext = useContext(AppContext);
  return appContext;
}

export default useApp;
