/**
 * 
 * Experiment Details component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import {Box, TextField, Alert} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// COMMON COMPONENT
import {Container} from '../../atom';
import {CardImage} from '../../molecules';
import PageHeader from '../common/header/pageHeader';
import {dateTimeDisplayFormat} from '../../../utils/file';
import {SUBMIT_STATUE} from '../../../utils/constants';
import Comments from './components/comments';
import {FEATURE} from '../../../utils/feature';
import {GET_EXPERIMENT_BY_ID_API} from '../../../api/constants';

// MOCK DATA
import ExperimentList from './data/list.json';

// STYLE IMPORT
import useStyles from './styles';

const ExperimentDetailsPage = () => {
  // DECLARE STYLE
  const classes = useStyles();
  const { itemId } = useParams();

  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState({});

  const getExperimentDetailById = async () => {
    setLoading(true);
    try {
        const response = await axios.get(`${GET_EXPERIMENT_BY_ID_API}${itemId}`);
        console.log(response.data);
        console.log(response.data?.[0] || {});
        const responseObject = response.data?.[0] || {};
        setState(responseObject);
    } catch (error) {
      console.log('error: ', error);
      alert("Something went wrong. Please try again later.");
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    getExperimentDetailById();
  }, []);
  return (
    <Container>
      <PageHeader title='Experiment Details' subtitle="Here's what you're looking at"  {...{isLoading}}></PageHeader>
      {state.status == SUBMIT_STATUE.SUBMITTED && <Alert severity="warning">Experiment not yet completed to view the result.</Alert>}
      {state.status == SUBMIT_STATUE.COMPLETED && <Alert severity="success">Experiment has been completed successfully.</Alert>}
      {state.status == SUBMIT_STATUE.ERROR && <Alert severity="error">Experiment fail to complete.</Alert>}
      {state.status == SUBMIT_STATUE.STARTED && <Alert severity="info">Experiment has been started. Please wait for sometime to view the result.</Alert>}
      <Box className={classes.formRow} mt={5}>
        <Box className={classes.formField}>
          <Box className={classes.fieldLabel}>Experiment ID</Box>
          <Box className={classes.fieldValue}>{state.experimentId}</Box>
        </Box>
        <Box className={classes.formField}>
          <Box className={classes.fieldLabel}>Submitter Name</Box>
          <Box className={classes.fieldValue}>{state.submitterName}</Box>
        </Box>
      </Box>

      <Box className={classes.formRow}>
        <Box className={classes.formField}>
          <Box className={classes.fieldLabel}>Number of samples</Box>
          <Box className={classes.fieldValue}>{state.noOfSamples}</Box>
        </Box>
        <Box className={classes.formField}>
          <Box className={classes.fieldLabel}>Submitted date</Box>
          <Box className={classes.fieldValue}>{dateTimeDisplayFormat(state.submittedDate)}</Box>
        </Box>
      </Box>

      <Box className={classes.formRow}>
        <Box className={classes.formField}>
          <Box className={classes.fieldLabel}>Status</Box>
          <Box className={classes.fieldValue}>{state.status}</Box>
        </Box>
        <Box className={classes.formField}>
          <Box className={classes.fieldLabel}>Experiment details</Box>
          <Box className={classes.fieldValue}>{state.experimentDetails}</Box>
        </Box>
      </Box>

      <Box className={classes.formRow}>
        <Box className={classes.formFieldlBlock}>
            <Box className={classes.fieldLabel}>Trait definitioins</Box>
            <TextField  variant="outlined" fullWidth={true} value={state.traitsFile} 
              multiline maxRows={10} className={classes.formTextfield}/>
        </Box>
      </Box>
      
      <Box className={classes.formRow}>
        <Box className={classes.formFieldlBlock}>
            <Box className={classes.fieldLabel}>Create Prompt file</Box>
          <TextField  variant="outlined" fullWidth={true} value={state.createPromptFile} 
              multiline maxRows={10} className={classes.formTextfield}/>
        </Box>
      </Box>
      <Box className={classes.formRow}>
        <Box className={classes.formFieldlBlock}>
            <Box className={classes.fieldLabel}>Config file</Box>
          <TextField variant="outlined" fullWidth={true} value={state.configFile} 
              multiline maxRows={10} className={classes.formTextfield}/>
        </Box>
      </Box>
      {state?.result?.length > 0 && <ul className={classes.datalist}>
        {state?.result.map((item, index) => (
          <li className={classes.dataListItem} key={`result-image-${index}`}>
            <CardImage file={
            {
              imageSrc: `data:image/jpeg;base64, ${item.imageResult}`,
            }
            }/>
            <Box className={classes.title} marginTop={0.5}><strong>Prompt: </strong>{item.prompt}&nbsp;<i className={clsx("fa fa-clone", classes.copyIcon)} onClick={() => navigator.clipboard.writeText(item.prompt)}></i></Box>
            <Box className={classes.title} marginTop={1}><strong>Revised prompt: </strong>{item.revised_prompt}&nbsp;<i className={clsx("fa fa-clone", classes.copyIcon)} onClick={() => navigator.clipboard.writeText(item.prompt)}></i></Box>
          </li>
        ))}
        </ul>}
      {FEATURE.COMMENTS && <Comments experimentData={state}/>}
    </Container>
  );
};

export default ExperimentDetailsPage;