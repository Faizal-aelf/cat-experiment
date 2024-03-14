import moment from 'moment';
import { minify } from 'terser';

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


export const isJSON = (content) => {
  try {
      JSON.parse(content);
      return true;
  } catch (error) {
      return false;
  }
}

export const minifyJS = async (content) => {
  try {
      // Minify the JavaScript content
      const result = await minify(content);
      return result.code; // Return the minified code
  } catch (error) {
      console.error('Error minifying JavaScript:', error);
      return content; // Return original content if minification fails
  }
};


const removeSpaces = (str)  => {
  // Replace spaces within single quotes and backticks with a placeholder
  let placeholder = '__SPACE__';
  let stringWithoutSpaces = str.replace(/(['`])(.*?)\1/g, (match, quote, content) => {
    return quote + content.replace(/\s+/g, placeholder) + quote;
  });

  // Remove spaces around special characters
  stringWithoutSpaces = stringWithoutSpaces.replace(/(?<!['`])\s*([^\w\s{('`]+)\s*(?![\w\s})'`]|function)\s*/g, '$1');

  // Convert multiple spaces into single space
  stringWithoutSpaces = stringWithoutSpaces.replace(/\s+/g, ' ');

  // Restore spaces within single quotes and backticks
  stringWithoutSpaces = stringWithoutSpaces.replace(new RegExp(placeholder, 'g'), ' ');

  return stringWithoutSpaces;
}
