import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  header: {
    // background: '#2980b9',
    // padding: '8px 24px',
    // color: '#fff',
  },
  pageHeaderContainer: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '16px',
    marginBottom: '24px',
    boxShadow: '0 1px 0 #ffffff',

  },
  pageHeaderTitle: {
    fontSize: '20px',
    fontWeight: 500,
    marginBottom: '4px',
  },
  pageHeaderSubtitle: {
    fontSize: '14px',
    color: '#5b5d71',
  }
}));
  
export default useStyles;