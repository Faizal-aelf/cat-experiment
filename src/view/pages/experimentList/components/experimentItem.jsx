/**
 * 
 * Experiment Item component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import { useState } from 'react';
import {Box, Grid, Tooltip, Chip} from '@mui/material';
import {useNavigate} from 'react-router-dom';

// COMMON COMPONENT
import {SUBMIT_STATUE} from '../../../../utils/constants';
import {truncateString, dateTimeDisplayServerFormat} from '../../../../utils/file';

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

  const shipStatus = {
    [SUBMIT_STATUE.COMPLETED]: <Chip color="success" label='Completed' size="small"/>,
    [SUBMIT_STATUE.SUCCESS]: <Chip color="success" label='Completed' size="small"/>,
    [SUBMIT_STATUE.ERROR]: <Chip color="error" label='Failed' size="small"/>,
    [SUBMIT_STATUE.STARTED]: <Chip color="info" label='Started' size="small"/>,
    [SUBMIT_STATUE.SUBMITTED]: <Chip color="info" label='Submitted' size="small"/>,
  }

  return (
    <Grid container  className={classes.rowDataHeader}>
      <Grid item xs={props.widths[0]} className={classes.rowData}>
      <Box component='span' className={classes.underlink} onClick={() => openDetails(props.data.experimentId)}>{props.data.experimentId}</Box>
      </Grid>
      <Grid item xs={props.widths[1]} className={classes.rowData}><Tooltip title={props.data.experimentDetails}>{truncateString(props.data.experimentDetails, 20)}</Tooltip></Grid>
      <Grid item xs={props.widths[2]} className={classes.rowData}><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;{props.data.submitterName}</Grid>
      <Grid item xs={props.widths[3]} className={classes.rowData}><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;{dateTimeDisplayServerFormat(props.data.submittedDate)}</Grid>
      <Grid item xs={props.widths[4]} className={classes.rowData}>{shipStatus[props.data.status.toUpperCase()]}</Grid>
      <Grid item xs={props.widths[5]} className={classes.rowData}>
        <Box component='span' className={classes.link} onClick={() => openDetails(props.data.experimentId)}>Details</Box>&nbsp;
        {props.data.status == SUBMIT_STATUE.COMPLETED && (<>|&nbsp;<Box className={classes.link} component='span' onClick={() => openDetails(props.data.experimentId)}>Result</Box></>)}</Grid>
    </Grid>
  );
};

export default ExperimentItem;