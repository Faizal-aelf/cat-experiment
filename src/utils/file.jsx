import moment from 'moment';
import {Chip, Alert} from '@mui/material';
import {SUBMIT_STATUE} from './constants';

export const generateRandomString = (length = 15) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
}

export const getTodayDateTime = () => {
  const currentDateWithTime = moment();
  const formattedDateTime = currentDateWithTime.format('YYYY-MM-DD HH:mm:ss');
  return formattedDateTime;
}

export const truncateString = (str, maxLength = 20) =>  {
  if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
  }
  return str;
}

export const dateTimeDisplayFormat = (dateString, format = 'MMM Do YYYY') =>  {
  // Parse the date string using Moment.js
  const parsedDate = moment(dateString, 'YYYY-MM-DD HH:mm:ss');

  // Format the parsed date as desired
  const formattedDate = parsedDate.format(format); //'MMMM Do YYYY', h:mm:ss a
  return formattedDate;
}


export const dateTimeDisplayServerFormat = (dateString, fromFormat = 'YYYYMMDD', toFormat = 'MMM Do YYYY') =>  {
  // Parse the date string using Moment.js
  const parsedDate = moment(dateString, fromFormat).format(toFormat);
  return parsedDate;
}

export const getDate = (value, format = 'MMM Do YYYY HH:mm:ss') => {
  if (typeof value == 'string') {
    return dateTimeDisplayServerFormat(value, 'YYYY-MM-DD HH:mm:ss', format)
  } else {
    return moment.unix(value).format(format);
  }
}

// Function to get the size of an image in KB from its Base64 content
export const getImageSizeInKB = (base64String) => {
  const binaryString = window.atob(base64String);
  const sizeInKB = binaryString.length / 1024;
  return sizeInKB;
};

export const shipStatus = {
  [SUBMIT_STATUE.COMPLETED]: <Chip color="success" label='Completed' size="small"/>,
  [SUBMIT_STATUE.SUCCESS]: <Chip color="success" label='Completed' size="small"/>,
  [SUBMIT_STATUE.ERROR]: <Chip color="error" label='Failed' size="small"/>,
  [SUBMIT_STATUE.STARTED]: <Chip color="info" label='Started' size="small"/>,
  [SUBMIT_STATUE.SUBMITTED]: <Chip color="warning" label='Pending' size="small"/>,
}

export const experimentAlert = {
  [SUBMIT_STATUE.COMPLETED]: <Alert severity="success">Experiment has been completed successfully.</Alert>,
  [SUBMIT_STATUE.SUCCESS]: <Alert severity="success">Experiment has been completed successfully.</Alert>,
  [SUBMIT_STATUE.ERROR]: <Alert severity="error">Experiment fail to complete.</Alert>,
  [SUBMIT_STATUE.STARTED]: <Alert severity="info">Experiment has been started. Please wait for sometime to view the result.</Alert>,
  [SUBMIT_STATUE.SUBMITTED]: <Alert severity="warning">Experiment not yet completed to view the result.</Alert>,
}