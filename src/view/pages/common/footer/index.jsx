/**
 * 
 * Footer component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// STYLE IMPORT
import useStyles from './styles';

const Footer = () => {
    // DECLARE STYLE
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            Copyright © 2024 AELF. All rights reserved.
        </footer>
    )
};
export default Footer;