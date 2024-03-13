
/**
 * 
 * Page header component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// COMPONENT IMPORT
import {Loader} from '../../../atom';

// STYLE IMPORT
import useStyles from './styles';

const PageHeader = (props) => {
    // DECLARE STYLE
    const classes = useStyles();

    return (
        <>
            <Box className={classes.pageHeaderContainer}>
                <Box className={classes.pageHeaderTitle}>{props.title}</Box>
                <Box className={classes.pageHeaderSubtitle}>{props.subtitle}</Box>
            </Box>
            { props.isLoading && <Loader/>} 
        </>
    )
};
export default PageHeader;