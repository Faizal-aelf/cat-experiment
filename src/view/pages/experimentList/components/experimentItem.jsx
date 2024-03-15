/**
 * 
 * Experiment Item component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import {Box, Grid, Tooltip} from '@mui/material';
import {useNavigate} from 'react-router-dom';

// COMMON COMPONENT
import {truncateString, getDate, shipStatus} from '../../../../utils/file';
import {FEATURE} from '../../../../utils/feature';

// STYLE IMPORT
import useStyles from '../styles';

const ExperimentItem = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

  // NAVBAR
  const navigate = useNavigate();

  const openDetails = (itemId) => {
    navigate(`/experimentDetails/${itemId}`);
  }

  const copyWebAddressLink = () => {
    const host = window.location.host; // Get the host (domain) part of the URL
    const path = window.location.pathname; // Get the path part of the URL
    const protocol = window.location.protocol; // Get the protocol (http or https) part of the URL
    const fullLink = `${protocol}://${host}/#/experimentDetails/${props.data.experimentId}`
    navigator.clipboard.writeText(fullLink)
  }

  return (
    <Grid container  className={classes.rowDataHeader}>
      <Grid item xs={props.widths[0]} className={classes.rowData}>
      <Box component='span' className={classes.underlink} onClick={() => openDetails(props.data.experimentId)}>{props.data.experimentId}</Box>
      </Grid>
      <Grid item xs={props.widths[1]} className={classes.rowData}><Tooltip title={props.data.experimentDetails}>{truncateString(props.data.experimentDetails, 20)}</Tooltip></Grid>
      <Grid item xs={props.widths[2]} className={classes.rowData}><i className="fa fa-user-o"></i>&nbsp;&nbsp;{props.data.submitterName}</Grid>
      <Grid item xs={props.widths[3]} className={classes.rowData}><i className="fa fa-calendar"></i>&nbsp;&nbsp;{getDate(props.data.submittedDate)}</Grid>
      <Grid item xs={props.widths[4]} className={classes.rowData}>
        <Box textAlign={'center'}>{shipStatus[props.data.status.toUpperCase()]}</Box>
      </Grid>
      <Grid item xs={props.widths[5]} className={classes.rowData} >
        <Box textAlign={'center'}><Box component='span' className={classes.link} onClick={() => openDetails(props.data.experimentId)}>Details</Box>&nbsp;
        {FEATURE.COPY_LINK && (<>| &nbsp; <Box className={classes.link} component='span' onClick={() => copyWebAddressLink()}>Copy Link</Box></>)}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExperimentItem;