import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: {
        display: 'inline-flex',
        flexDirection: 'row',
        border: '1px solid #bdc3c7',
        padding: '8px 20px',
        borderRadius: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        marginLeft: 'auto',
        marginRight: 'auto',
        '&:hover': {
            border: '1px solid #95a5a6',
            cursor: 'pointer',
            boxShadow: '1px 1px 3px #ecf0f1'
        }
    },
    logo: {
        width: '28px'
    },
    title: {
        fontSize: '14px',
        fontWeight: 600
    }
}));
  
export default useStyles;