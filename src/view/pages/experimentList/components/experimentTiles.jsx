/**
 * 
 * Experiment Tiles component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// COMMON COMPONENT

// STYLE IMPORT
import useStyles from '../styles';

const ExperimentTiles = (props) => {
  // DECLARE STYLE
  const classes = useStyles();
  

  return (
    <Box display='flex' flex={1} className={classes.rowHeader}>
      <Box flex={props.widths[0]} className={classes.rowHeaderTitle}>ID</Box>
      <Box flex={props.widths[1]} className={classes.rowHeaderTitle}>Description</Box>
      <Box flex={props.widths[2]} className={classes.rowHeaderTitle}>Submitter</Box>
      <Box flex={props.widths[3]} className={classes.rowHeaderTitle}>Created Date</Box>
      <Box flex={props.widths[4]} className={classes.rowHeaderTitle}>Status</Box>
      <Box flex={props.widths[5]} className={classes.rowHeaderTitle}>Action</Box>
    </Box>
  );
};

export default ExperimentTiles;