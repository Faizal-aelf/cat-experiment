/**
 * 
 * Traits experiment component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import { useState } from 'react';
import {Box, TextField, Button, Typography} from '@mui/material';
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
    createPromptFile: '',
    configFile: null,
    submittedDate: getTodayDateTime(),
    status: SUBMIT_STATUE.SUBMITTED,
    comments: []
  });

  const handleChange = (event, name) => {
    const { value, type, files } = event.target;
    if (type === 'file') {
        const file = files[0];
        const reader = new FileReader();
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if ((fileExtension === 'json' && ['configFile', 'traitsFile'].includes(name))/* || (fileExtension === 'js' && ['createPromptFile'].includes(name))*/) {
          reader.onload = (e) => {
            if (fileExtension == 'json') {
            const jsonData = JSON.parse(e.target.result);
            const jsonString = JSON.stringify(jsonData);
              setState(prevState => ({
                  ...prevState,
                  [name]: jsonString,
              }));
            } /* else {
              setTimeout(() => setState(prevState => ({
                ...prevState,
                [name]: finalContent,
              })), 0);
            } */
          };
        reader.readAsText(file);
      } else {
        alert('Please upload only JSON file');
        setState(prevState => ({
          ...prevState,
          [name]: null,
        }));
        event.target.value = null;
      }
    } else {
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
  };

  
  const isAllFieldValid = () => {
    if (!state.submitterName.trim().length) {
      alert("Please provide submitter name");
      return false;
    } else if (!state.traitsFile) {
      alert("Please upload trait definitions file in json format");
      return false;
    } else if (!state.createPromptFile.trim().length) {
      alert("Please provide config prompt js file content");
      return false;
    } else if (!state.configFile) {
      alert("Please upload config file in json format");
      return false;
    } else if (state.noOfSamples == 0) {
      alert("Please provide no of samples");
      return false;
    } else {
      return true;
    }
  };

  const submitForm = async () => {
    if (!isAllFieldValid()) {
      return;
    }
    setLoading(true);
      try {
          const params = {
            ...state,
            submittedDate: getTodayDateTime()
          }
          console.log("params: ", params);
          const response = await axios.post(
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
          alert('Submitted successfully');
          resetForm();
      } catch (error) {
          console.log('error: ', error);
          alert("Error occured:");
      } finally {
          setLoading(false);
      }
  };

  const resetForm = () => {
    setState({
      ...state,
      experimentId: generateRandomString(),
      submitterName: '',
      noOfSamples: 100,
      experimentDetails: '',
      createPromptFile: '',
      submittedDate: getTodayDateTime(),
      status: SUBMIT_STATUE.SUBMITTED
    });
  }

  return (
    <Container>
      <PageHeader title='Experiment Submitter' subtitle="Here's what you're looking at"  {...{isLoading}}></PageHeader>
      <Box className={classes.formRow}>
        <Box flex={1}>
          <TextField  label="Experiment ID" variant="outlined" required 
            fullWidth={true} value={state.experimentId} className={classes.formTextfield}  disabled
            type='text'/>
        </Box>
        <Box flex={1}>
          <TextField  label="Submitter Name" variant="outlined"  required 
            fullWidth={true} value={state.submitterName} className={classes.formTextfield} 
            type='text' onChange={(event) => handleChange(event, 'submitterName')}/>
        </Box>
      </Box>
      <Box className={classes.formRow}>
        <Box flex={1}>
          <TextField 
            accept="image/*" 
            required
            type="file" 
            variant="outlined" 
            className={classes.formTextfield}
            onChange={(event) => handleChange(event, 'traitsFile')}
            fullWidth={true}
            helperText='Upload Trait definitioins file in json format'/>
        </Box>
        <Box flex={1}>
          <TextField  label="Create Prompt File content" variant="outlined" fullWidth={true} value={state.createPromptFile} 
            multiline maxRows={5} className={classes.formTextfield} required 
            onChange={(event) => handleChange(event, 'createPromptFile')} />
            <Typography variant="caption" display="block">
              Compress your js file content from <a target='_blank' href='https://www.jyshare.com/front-end/51/'>https://www.jyshare.com/front-end/51/</a> before pasting it
            </Typography>
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
          <TextField  label="Number of samples" variant="outlined" required 
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