/**
 * 
 * Notification generator
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext} from 'react';

// UTILS IMPORT
import {formValidationMessages} from './validationMessages';
import {NotificationType} from './constants';

// CONTEXT IMPORT
import {NotificationContext} from '../contexts/notificationContext';

function useNotification() {
    const { notification, setNotification } = useContext(NotificationContext);

    const error = (message = formValidationMessages.error()) => {
        setNotification({type: NotificationType.error, message: message, isOpen: true});
    }

    const success = (message = formValidationMessages.success()) => {
        setNotification({type: NotificationType.success, message: message, isOpen: true});
    }
    return {
        error,
        success,
    }
}

export default useNotification;