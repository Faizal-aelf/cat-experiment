import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    rowHeader: {
        display: 'flex',
        flex: 1,
        color: '#e4e2f1',
        background: '#36304a',
        boxSizing: 'border-box',
        borderRadius: ' 4px 4px 0 0'
    },
    rowHeaderTitle: {
        fontSize: '13px',
        fontWeight: 600,
        textTransform: 'uppercase',
        textAlign: 'left',
        padding: '10px 20px',   
        boxSizing: 'border-box',
    },
    rowDataHeader: {
        background: '#f6f6f6',
        boxSizing: 'border-box',
        borderBottom: '1px solid #e5e5e5',
        marginBottom: '1px',
    },
    rowData: {
        fontSize: '13px',
        textAlign: 'left',
        padding: '10px 20px',   
        boxSizing: 'border-box',
    },
    link: {
        cursor: 'pointer',
        color: '#256dd3'
    }
}));
  
export default useStyles;