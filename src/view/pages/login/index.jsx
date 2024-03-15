/**
 * 
 * Login Page component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';
import {Box} from '@mui/material';

// COMPONENT IMPORT
import {Container} from '../../atom';
import GoogleLogoImage from '../../../assets/img/google-logo.png'


// STYLE IMPORT
import useStyles from './styles';

const LoginPage = () => {
  const classes = useStyles();

  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(setLoading(false), 1000);
  })
  return (
    <> 
      <Box className={classes.container}>
        <img src={GoogleLogoImage} alt='Google Logo' className={classes.logo}/>
        <Box className={classes.title}>Continue with Google</Box>
      </Box>
    </>
  )
}

export default LoginPage;