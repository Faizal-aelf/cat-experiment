import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    logoContainer: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        padding: '9px 25px 10px 20px',
        background: '#145cc2',
    },
    logoName: {
        fontSize: '22px',
        fontWeight: 700,
        color: '#fff',
        marginLeft: '12px',
        fontFamily: "'Caveat', cursive",
    }
  }));
  
  export default useStyles;