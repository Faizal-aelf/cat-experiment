/**
 * 
 * Traits experiment component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import { useState } from 'react';
import {Box, TextField, Button} from '@mui/material';
import axios from 'axios';

// COMMON COMPONENT
import {Container} from '../../atom';
import PageHeader from '../common/header/pageHeader';
import {EXPERIMENT_SUBMIT_API} from '../../../api/constants';
import {generateRandomString, getTodayDateTime} from '../../../utils/file';
import {SUBMIT_STATUE} from '../../../utils/constants';

// STYLE IMPORT
import useStyles from './styles';

const ExperimentSubmitterPage = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState({
    experimentId: generateRandomString(),
    submitterName: '',
    noOfSamples: 100,
    experimentDetails: '',
    traitsFile: null,
    createPromptFile: null,
    configFile: null,
    submittedDate: getTodayDateTime(),
    status: SUBMIT_STATUE.SUBMITTED
  });

  const handleChange = (event, name) => {
    const { value, type, files } = event.target;
    if (type === 'file') {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setState(prevState => ({
                ...prevState,
                [name]: e.target.result,
            }));
        };
        reader.readAsText(file);
    } else {
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
  };

  const submitForm = async () => {
    setLoading(true);
      try {
          const params = {...state}
          console.log("params: ", params);
          /*const response = await axios.post(
              EXPERIMENT_SUBMIT_API,
                  {
                      ...params,
                  },
                  {
                  headers: {
                      'Content-Type': 'application/json',
                  },
              }
          );
          console.log(response.data);
          alert('Created successfully')*/
          alert('Submitted successfully')
      } catch (error) {
          console.log('error: ', error);
          alert("Error occured:");
      } finally {
          setLoading(false);
      }
  };

  return (
    <Container>
      <PageHeader title='Experiment Submitter' subtitle="Here's what you're looking at"  {...{isLoading}}></PageHeader>
      <Box className={classes.formRow}>
        <Box flex={1}>
          <TextField  label="Experiment ID" variant="outlined" 
            fullWidth={true} value={state.experimentId} className={classes.formTextfield}  disabled
            type='text'/>
        </Box>
        <Box flex={1}>
          <TextField  label="Submitter Name" variant="outlined" 
            fullWidth={true} value={state.submitterName} className={classes.formTextfield} 
            type='text' onChange={(event) => handleChange(event, 'submitterName')}/>
        </Box>
      </Box>
      <Box className={classes.formRow}>
        <Box flex={1}>
          <TextField 
            accept="image/*" 
            type="file" 
            variant="outlined" 
            className={classes.formTextfield}
            onChange={(event) => handleChange(event, 'traitsFile')}
            fullWidth={true}
            required
            helperText='Upload Trait definitioins file in json format'/>
        </Box>
        <Box flex={1}>
          <TextField 
            accept="image/*" 
            type="file" 
            variant="outlined" 
            className={classes.formTextfield}
            onChange={(event) => handleChange(event, 'createPromptFile')}
            fullWidth={true}
            required
            helperText='Upload createPrompt.js file in js format'/>
        </Box>
      </Box>
      <Box className={classes.formRow}>
        <Box flex={1}>
        <TextField 
            accept="image/*" 
            type="file" 
            variant="outlined" 
            className={classes.formTextfield}
            onChange={(event) => handleChange(event, 'configFile')}
            fullWidth={true}
            required
            helperText='Upload config file in json format'/>
        </Box>
        <Box flex={1}>
          <TextField  label="Number of samples" variant="outlined" 
            fullWidth={true} value={state.noOfSamples} className={classes.formTextfield} 
            type='number' 
            onChange={(event) => handleChange(event, 'noOfSamples')} inputProps={{min: "1", max: "1000"}}/>
        </Box>
      </Box>
      <Box className={classes.formRow}>
        <Box flex={1}>
          <TextField  label="Experiment details" variant="outlined" fullWidth={true} value={state.experimentDetails} 
            multiline maxRows={5} className={classes.formTextfield} 
            onChange={(event) => handleChange(event, 'experimentDetails')}/>
        </Box>
      </Box>
      <Box className="btn-container" textAlign='right'>
          <Button variant="contained" onClick={submitForm}>Submit Experiment</Button>
      </Box>
    </Container>
  );
};

export default ExperimentSubmitterPage;