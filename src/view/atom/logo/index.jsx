/**
 * 
 * Logo component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// ICON IMPORT
import LogoIcon from '../../../assets/img/aelf-logo.png';

// STYLE IMPORT
import useStyles from './styles';

const Logo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.logoContainer}> 
      <img src={LogoIcon}  alt="Logo" height={25}/>
      <Box className={classes.logoName}>NFT Generator</Box>
    </Box>
  )
}

export default Logo;