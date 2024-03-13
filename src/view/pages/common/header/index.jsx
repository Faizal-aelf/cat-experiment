
/**
 * 
 * Header component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// STYLE IMPORT
import useStyles from './styles';

const Header = () => {
    // DECLARE STYLE
    const classes = useStyles();

    return (
        <header className={classes.header}></header>
    )
};
export default Header;