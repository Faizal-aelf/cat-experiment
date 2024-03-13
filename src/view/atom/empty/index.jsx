/**
 * 
 * Empty section component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

const Empty = (props) => {
    // DECLARE STYLE
    const classes = useStyles();

    return (
        <Box className={classes.emptyContainer}>
            <Box className={classes.iconContainer}>{props.icon}</Box>
            <Box className={classes.title}>{props.title}</Box>
            {props.subtitle && <Box className={classes.subtitle}>{props.subtitle}</Box>}
        </Box>
    )
};
export default Empty;