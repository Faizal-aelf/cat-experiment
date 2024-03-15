/**
 * 
 * Notification context
 * @author - NA 
 * @date - 15th March, 2024
 * 
 */
// GENERIC IMPORT
import {createContext} from 'react';

// UTILS IMPORT
import {NotificationType} from '../utils/constants';

// CREATING CONTEXT WITH INITIAL VALUES
export const NotificationContext = createContext({
    notification: {
      type: NotificationType.success,
      message: '',
      isOpen: false,
    },
    setNotification: () => {}
});