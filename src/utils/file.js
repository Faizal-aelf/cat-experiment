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

export const dateTimeDisplayFormat = (dateString) =>  {
  // Parse the date string using Moment.js
  const parsedDate = moment(dateString, 'YYYY-MM-DD HH:mm:ss');

  // Format the parsed date as desired
  const formattedDate = parsedDate.format('MMMM Do YYYY'); // , h:mm:ss a
  return formattedDate;
}

