import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    commentsBox: {
        border: '1px solid #e3e3e3',
        padding: '18px',
        borderRadius: '8px',
    },
    commentsBoxTitle: {
        fontSize: '13px',
        fontWeight: 600,
        marginBottom: '8px'
    },
    commentUserBox: {
        background: '#f1f1f1',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '16px'
    },
    commentUserTitle: {
        color: '#222',
        fontSize: '15px',
        marginBottom: '4px',
        flex: 1,
    },
    commentUserDate: {
        color: '#8e8e8e',
        fontSize: '12px',
        flex: 1,
        justifyContent: 'flex-end',
        display: 'inline-flex'
    },
    commentUserContent: { 
        color: '#4f4f4f',
        fontSize: '14px',
    },
    formTextfield: {
    }
}));
  
export default useStyles;