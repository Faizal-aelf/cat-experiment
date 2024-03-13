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
}));
  
export default useStyles;