/**
 * 
 * Traits experiment component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import { useState, useRef } from 'react';
import {Box, TextField, Button, Tooltip} from '@mui/material';
import axios from 'axios';

// COMMON COMPONENT
import {Container} from '../../atom';
import PageHeader from '../common/header/pageHeader';
import {EXPERIMENT_SUBMIT_API} from '../../../api/constants';
import {generateRandomString, getTodayDateTime} from '../../../utils/file';
import {SUBMIT_STATUE} from '../../../utils/constants';

// UTILS IMPORT
import useNotification from '../../../utils/notification';

// STYLE IMPORT
import useStyles from './styles';

const ExperimentSubmitterPage = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

  // REF VARIABLE
  const traitFileRef = useRef(null);
  const createPromptFileRef = useRef(null);
  const configFileRef = useRef(null);

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
    status: SUBMIT_STATUE.SUBMITTED,
    comments: []
  });

  const handleChange = (event, name) => {
    const { value, type, files } = event.target;
    if (type === 'file') {
        const file = files[0];
        const reader = new FileReader();
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if ((fileExtension === 'json' && ['configFile', 'traitsFile'].includes(name)) || (fileExtension === 'js' && ['createPromptFile'].includes(name))) {
          reader.onload = (e) => {
            if (fileExtension == 'json') {
            const jsonData = JSON.parse(e.target.result);
            const jsonString = JSON.stringify(jsonData);
              setState(prevState => ({
                  ...prevState,
                  [name]: jsonString,
              }));
            } else {
              let finalContent = e.target.result;
              console.log(finalContent);
              setTimeout(() => setState(prevState => ({
                ...prevState,
                [name]: finalContent,
              })), 0);
            }
          };
        reader.readAsText(file);
      } else {
         if (['configFile', 'traitsFile'].includes(name)) {
          setNotification.error('Please upload only JSON file');
        } else {
          setNotification.error('Please upload only Javascript file');
        }
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
      setNotification.error("Please provide the name of the submitter.");
    } else if (!state.traitsFile) {
      setNotification.error("Please upload the trait definitions file in JSON format.");
    } else if (!state.createPromptFile) {
      setNotification.error("Please upload the 'createPrompt' file in JavaScript (.js) format.");
    } else if (!state.configFile) {
      setNotification.error("Please upload the configuration file in JSON format.");
    } else if (state.noOfSamples == 0) {
      setNotification.error("Please provide the number of samples.");
    } else {
      return true;
    }
    return false;
  };

  const submitForm = async () => {
    if (!isAllFieldValid()) {
      return;
    }
    setLoading(true);
      try {
          const params = {
            ...state,
            noOfSamples: parseInt(state.noOfSamples),
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
          setNotification.success('Submission successful.');
          resetForm();
      } catch (error) {
          console.log('error: ', error);
          setNotification.error("Something went wrong. Please try again later.");
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
      traitsFile: null,
      createPromptFile: null,
      configFile: null,
      submittedDate: getTodayDateTime(),
      status: SUBMIT_STATUE.SUBMITTED
    });
    traitFileRef.current.value = null;
    createPromptFileRef.current.value = null;
    configFileRef.current.value = null;
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
            type='text' onChange={(event) => handleChange(event, 'submitterName')} inputProps={{maxLength: 25}}/>
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
            inputProps={{
              ref: traitFileRef
            }}
            helperText={<>Upload Trait definitioins file in json format. You can <Tooltip title="You can download and use it but its not latest file."><a href='/sampleFile/trait-definitioins.json' className={classes.link} download>download</a></Tooltip> sample file here.</>}/>
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
              inputProps={{
                ref: createPromptFileRef
              }}
              helperText={<>Upload createPrompt file in js format. You can <Tooltip title="You can download and use it but its not latest file."><a href='/sampleFile/createPrompt.js' className={classes.link} download>download</a></Tooltip> sample file here.</>}/>
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
            inputProps={{
              ref: configFileRef
            }}
            helperText={<>Upload config file in json format. You can <Tooltip title="You can download and use it but its not latest file."><a href='/sampleFile/config.json' className={classes.link} download>download</a></Tooltip> sample file here.</>}/>
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
            onChange={(event) => handleChange(event, 'experimentDetails')} inputProps={{maxLength: 400}}/>
        </Box>
      </Box>
      <Box className={classes.btnContainer} textAlign='right'>
          <Button variant="outlined" onClick={resetForm}>Clear</Button>
          <Button variant="contained" onClick={submitForm}>Submit Experiment</Button>
      </Box>
    </Container>
  );
};

export default ExperimentSubmitterPage;