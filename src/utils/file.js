import moment from 'moment';

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
