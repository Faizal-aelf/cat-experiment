import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    notificationContainer: {
        position: 'fixed',
        zIndex: 9999,
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        justifyContent: 'center',
        margin: '0 auto',
        display: 'none',
        flex: 1,
        transition: 'all 2s linear',

    },
    notificationAlert: {
        minWidth: '200px',
        maxWidth: '90%',
    },
    showNotification: {
        display: 'flex'
    }
  }));
  
  export default useStyles;