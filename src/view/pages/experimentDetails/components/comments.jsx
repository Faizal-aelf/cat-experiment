/**
 * 
 * Experiment Details component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import { useState } from 'react';
import {Box, TextField, Button} from '@mui/material';

// COMMON COMPONENT
import {dateTimeDisplayFormat, generateRandomString, getTodayDateTime} from '../../../../utils/file';
import {SUBMIT_STATUE} from '../../../../utils/constants';
import {UPDATE_EXPERIMENT_API} from '../../../../api/constants';

// UTILS IMPORT
import useNotification from '../../../../utils/notification';

// STYLE IMPORT
import useStyles from './styles';

const Comments = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState({
    id: "",
    name: "",
    comments: "",
    date: ""
  });
  const commentsList = props?.experimentData?.comments || [];
  const [commentsAllList, setCommentsAllList] = useState(props?.experimentData?.comments || []);

  const submitComments = () => {
    setLoading(true);
    try {
        const newCommentObj = {
            ...state,
            id: generateRandomString(),
            date: getTodayDateTime(),
        }
        const params = {
          ...props?.experimentData,
          comments: [
            newCommentObj,
            ...commentsList,
          ]
        }
        setCommentsAllList([newCommentObj, ...commentsAllList]);
        console.log("params: ", params);
        /*const response = await axios.post(
            UPDATE_EXPERIMENT_API,
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
        */
        // ONCE API READY, CAN UNCOMMENT THE ABOVE CODE
        setNotification.success('Submitted successfully');
        resetForm();
    } catch (error) {
        console.log('error: ', error);
        setNotification.error("Something went wrong. Please try again later.");
    } finally {
        setLoading(false);
    }
  }

  const resetForm = () => {
    setState({
        id: "",
        name: "",
        comments: "",
        date: ""
    });
  }
  return (
    <Box className={classes.commentsBox}>
        <Box className={classes.commentsBoxTitle}>Comments</Box>
        <Box flex={1} mb={2} mt={2}>
          <TextField label="Name" variant="outlined" fullWidth={true} value={state.name} 
            className={classes.formTextfield}
            onChange={(event) => setState({...state,  name: event.target.value})} placeholder='Enter your name here'/>
        </Box>
        <Box flex={1} mb={2}>
          <TextField label="Comments" variant="outlined" fullWidth={true} value={state.comments} 
            multiline maxRows={5} className={classes.formTextfield} 
            onChange={(event) => setState({...state,  comments: event.target.value})} placeholder='Enter your comments here'/>
        </Box>
        {commentsAllList?.map((item) => (
            <Box className={classes.commentUserBox} key={item.id}>
                <Box display='flex'>
                    <Box className={classes.commentUserTitle}>
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;{item.name}
                    </Box>
                    <Box className={classes.commentUserDate}>
                        <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;{dateTimeDisplayFormat(item.date, 'MMMM Do YYYY, h:mm:ss a')}
                    </Box>
                </Box>
                <Box className={classes.commentUserContent}>{item.comments}</Box>
            </Box>
        ))}
        <Box className="btn-container" textAlign='right'>
          <Button variant="contained" onClick={() => submitComments()} disabled={!state.name.length || !state.comments.length}>Submit</Button>
      </Box>
    </Box>
  );
};

export default Comments;