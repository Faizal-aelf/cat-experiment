/**
 * 
 * App component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import {useReducer, useState} from 'react';

// COMMON COMPONENT
import {Notification} from './view/molecules';

// ROUTER IMPORT
import EntryRoutes from './view/routes/entryRoutes';

// CONTEXT IMPORT
import {NotificationContext} from './contexts/notificationContext';

// UTILS
import {NotificationType} from './utils/constants';

// CONTEXT
import { menuInitialState, menuContext as MenuContext, menuReducer } from './contexts/useMenuContext';

function App() {
  // STATE DECLARE
  const [state, dispatch] = useReducer(menuReducer, menuInitialState);
  const [notification, setNotification] = useState({
    type: NotificationType.success,
    message: '',
    isOpen: false,
  });
  
  // GENERAL DECLARE VARIABLE
  const value = { notification, setNotification };
  
  return (
    <NotificationContext.Provider value={value}>        
      <MenuContext.Provider value={{ state, dispatch }}>
        <EntryRoutes/>
        <Notification {...value.notification} setNotification={setNotification}/>
      </MenuContext.Provider>
    </NotificationContext.Provider>
  );
}

export default App;

