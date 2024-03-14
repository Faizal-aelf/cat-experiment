/**
 * 
 * Experiment Tiles component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import {Grid} from '@mui/material';

// COMMON COMPONENT

// STYLE IMPORT
import useStyles from '../styles';

const ExperimentTiles = (props) => {
  // DECLARE STYLE
  const classes = useStyles();
  

  return (
    <Grid container className={classes.rowHeader}>
      <Grid item xs={props.widths[0]} className={classes.rowHeaderTitle}>ID</Grid>
      <Grid item xs={props.widths[1]} className={classes.rowHeaderTitle}>Description</Grid>
      <Grid item xs={props.widths[2]} className={classes.rowHeaderTitle}>Submitter</Grid>
      <Grid item xs={props.widths[3]} className={classes.rowHeaderTitle}>Created Date</Grid>
      <Grid item xs={props.widths[4]} className={classes.rowHeaderTitle}>Status</Grid>
      <Grid item xs={props.widths[5]} className={classes.rowHeaderTitle}>Action</Grid>
    </Grid>
  );
};

export default ExperimentTiles;