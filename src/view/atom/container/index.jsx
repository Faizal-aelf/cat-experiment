/**
 * 
 * Container component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

const Container = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>{props.children}</Box>
  )
}

export default Container;