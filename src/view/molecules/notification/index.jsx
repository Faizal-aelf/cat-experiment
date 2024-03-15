/**
 * 
 * Notification component
 * @author - NA 
 * @date - 15th March, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {useEffect} from 'react';
import {Box, Alert} from '@mui/material';

// UTILS IMPORT 
import {NotificationType} from '../../../utils/constants';

// STYLE IMPORT
import useStyles from './styles';


const Notification = (props) => {
    const classes = useStyles();

    useEffect(() => {
        if (props.isOpen) {
            setTimeout(() => props.setNotification({message: '', isOpen: false, type: props.type}), 7000);
        }
    }, [props.isOpen])
    
    return (
        <Box className={clsx(classes.notificationContainer, props.isOpen && classes.showNotification)}>
            <Alert severity={NotificationType.error === props.type ? "error": 'success'}>{props.message}</Alert>
        </Box>  
    )
}

export default Notification;