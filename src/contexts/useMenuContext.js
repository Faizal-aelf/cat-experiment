/**
 * 
 * Menu context
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import { createContext } from 'react';


// ROUTER IMPORT
import * as PATH from '../view/routes/constants';

// CONSTANT
export const MENU_ACTION_TYPE = {
  UPDATE: 'UPDATE'
} 

// INITIAL STATE
export const menuInitialState = {
    value: localStorage.getItem("selectedMenu") || PATH.HOME_PATH,
};

// CREATE CONTEXT
export const menuContext = createContext(undefined);


// REDUCER FUNCTION
export const menuReducer = (state, action) => {
    switch (action.type) {
      case MENU_ACTION_TYPE.UPDATE:
        return { ...state, value: action.payload };
      default:
        return state;
    }
};
  