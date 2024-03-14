import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    formRow: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        gap: '12px',
        marginBottom: '24px'
    },
    formField: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 15px 14px 15px',
        background: '#f1f1f1',
        borderRadius: '4px',
        marginBottom: '8px'
    },
    fieldLabel: {
        maxWidth: "fit-content",
        fontSize: "13px",
        marginTop: "-28px",
        fontWeight: "600",
        marginBottom: "11px",
        background: "#f1f1f1",
        padding: "7px 12px 0 12px",
        borderRadius: "4px",
        marginLeft: "8px",
    },
    fieldLabelBlock: {
        width: '140px',
        fontSize: '13px',
        fontWeight: 600,
        marginBottom: '8px'
    },
    formFieldlBlock: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 8px',
        background: '#f1f1f1',
        borderRadius: '4px',
    },
    fieldValue: {
        flex: 1,
        fontSize: '13px'
    },
    code: {
        maxWidth: '600px'
    },
    formTextfield: {
        background: '#fff'
    },
    dataList: {
        padding: 0,
        display: 'flex',
        border: '1px solid #ccc',
        flexDirection: 'row',
    },
    dataListItem: {
        display: 'inline-flex',
        padding: '8px',
        margin: '0 12px 24px 0',
        alignItems: 'center'
    },
    title: {
        marginTop: '-12px',
        fontSize: '13px',
        color: '#393939'
    },
    copyIcon: {
        cursor: 'pointer'
    },
}));
  
export default useStyles;