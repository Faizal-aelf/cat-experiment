/**
 * 
 * Experiment Item component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import { useState } from 'react';
import {Box, Link, Tooltip} from '@mui/material';
import {useNavigate} from 'react-router-dom';

// COMMON COMPONENT
import {SUBMIT_STATUE} from '../../../../utils/constants';
import {truncateString, dateTimeDisplayFormat} from '../../../../utils/file';

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

  return (
    <Box display='flex' flex={1} className={classes.rowDataHeader}>
      <Box flex={props.widths[0]} className={classes.rowData}>{props.data.experimentId}</Box>
      <Box flex={props.widths[1]} className={classes.rowData}><Tooltip title={props.data.experimentDetails}>{truncateString(props.data.experimentDetails, 20)}</Tooltip></Box>
      <Box flex={props.widths[2]} className={classes.rowData}>{props.data.submitterName}</Box>
      <Box flex={props.widths[3]} className={classes.rowData}>{dateTimeDisplayFormat(props.data.submittedDate)}</Box>
      <Box flex={props.widths[4]} className={classes.rowData}>{props.data.status}</Box>
      <Box flex={props.widths[5]} className={classes.rowData}>
        <Box component='span' className={classes.link} onClick={() => openDetails(props.data.experimentId)}>Details</Box> 
        {props.data.status == SUBMIT_STATUE.COMPLETED && (<>| <Box className={classes.link} component='span' onClick={() => openDetails(props.data.experimentId)}>Result</Box></>)}</Box>
    </Box>
  );
};

export default ExperimentItem;