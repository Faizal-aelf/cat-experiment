/**
 * 
 * Menu component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {useContext, useState} from 'react';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';

// GENERIC COMPONENT
import { Logo, Loader } from '../../../atom';
import { mainMenuItems, utilsMenuItems, helpMenuItems } from './constants';

// CONTEXT
import { menuContext, MENU_ACTION_TYPE } from '../../../../contexts/useMenuContext';

// STYLE IMPORT
import useStyles from './styles';

const Menu = () => {
    // DECLARE STYLE
    const classes = useStyles();

    // LOCAL STATE
    const [isLoading, setLoading] = useState(false);

    // NAVBAR
    const navigate = useNavigate();

    // CONTEXTS
    const context = useContext(menuContext);
    const selectedMenu = context?.state.value || localStorage.getItem("selectedMenu");

    // ON MENU ITEM CLICKED
    const onMenuPress = (link) => {
        setLoading(true);
        navigate(link);
        context?.dispatch({ type: MENU_ACTION_TYPE.UPDATE, payload: link });
        setTimeout(() => setLoading(false), 500);
        localStorage.setItem("selectedMenu", link);
    };

    return (
        <Box className={classes.sideMenu}>
            {isLoading && <Loader/>}
            <Box className={classes.sideMenuTopLayer}>
                <Logo/>
                <Box className={classes.menu}>
                    <ul className={classes.menuList}>
                        {mainMenuItems.map((item) => (
                            <li key={item.id} onClick={() => onMenuPress(item.link)} className={clsx(classes.menuItem, item.link === selectedMenu && classes.menuActive)}>{item.icon}&nbsp;&nbsp;{item.label}</li>
                        ))}
                    </ul>
                    <Box className={classes.menuHeader}>Utils</Box>
                    <ul className={clsx(classes.menuList)}>
                        {utilsMenuItems.map((item) => (
                            <li key={item.id} onClick={() => onMenuPress(item.link)} className={clsx(classes.menuItem,  item.link === selectedMenu && classes.menuActive)}>{item.icon}&nbsp;&nbsp;{item.label}</li>
                        ))}
                    </ul>
                </Box>
            </Box>
            <Box className={classes.sideMenuBottomLayer}>
                <ul className={clsx(classes.menuList)}>
                    {helpMenuItems.map((item) => (
                        <li key={item.id} onClick={() => onMenuPress(item.link)} className={clsx(classes.menuItem,  item.link === context?.state.value && classes.menuActive)}>{item.icon}&nbsp;&nbsp;{item.label}</li>
                    ))}
                </ul>
            </Box>
        </Box>
    )
}

export default Menu;