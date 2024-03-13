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
import {Box, TextField} from '@mui/material';
import { useParams } from 'react-router-dom';

// COMMON COMPONENT
import {Container} from '../../atom';
import {CardImage} from '../../molecules';
import PageHeader from '../common/header/pageHeader';
import {dateTimeDisplayFormat} from '../../../utils/file';

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
        /*const response = await axios.get(EXPERIMENT_LIST_API);;
        console.log(response.data);
        const responseList = response.data;
        */
        const responseList = ExperimentList;
        setState(responseList.find(item => item.experimentId == itemId) || {})
    } catch (error) {
      console.log('error: ', error);
      alert("Error occured:");
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
      <Box className={classes.formRow}>
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
            <Box className={classes.fieldLabelBlock}>Trait definitioins</Box>
            <TextField  variant="outlined" fullWidth={true} value={state.traitsFile} 
              multiline maxRows={10} className={classes.formTextfield}/>
        </Box>
      </Box>
      
      <Box className={classes.formRow}>
        <Box className={classes.formFieldlBlock}>
            <Box className={classes.fieldLabelBlock}>Create Prompt file</Box>
          <TextField  variant="outlined" fullWidth={true} value={state.createPromptFile} 
              multiline maxRows={10} className={classes.formTextfield}/>
        </Box>
      </Box>
      <Box className={classes.formRow}>
        <Box className={classes.formFieldlBlock}>
            <Box className={classes.fieldLabelBlock}>Config file</Box>
          <TextField variant="outlined" fullWidth={true} value={state.configFile} 
              multiline maxRows={10} className={classes.formTextfield}/>
        </Box>
      </Box>
      {state.resultList?.length > 0 && <ul className={classes.datalist}>
        {state.resultList.map((item) => (
          <li className={classes.dataListItem}>
            <CardImage file={
            {
              imageSrc: item.image_url,
            }
            }/>
            <Box className={classes.title} marginTop={0.5}>{item.prompt}&nbsp;<i className={clsx("fa fa-clone", classes.copyIcon)} onClick={() => navigator.clipboard.writeText(item.prompt)}></i></Box>
          </li>
        ))}
        </ul>}
    </Container>
  );
};

export default ExperimentDetailsPage;