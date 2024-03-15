import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    formRow: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        gap: '12px',
        marginBottom: '24px'
    },
    formTextfield: {
        marginBottom: 0,
    },
    link: {
        cursor: 'pointer',
        color: '#256dd3',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '12px'
    }

}));
  
export default useStyles;