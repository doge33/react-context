import React, { createContext, useReducer } from 'react';
import LanguageReducer from './LanguageReducer';

//1. create the global context:

const initialState = {
  language: 'english'
};
export const GlobalContext = createContext(initialState);


//2. return Provider component (which is used to wrap around anything you want)
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(LanguageReducer, initialState);

  const changeLanguage = (language) => {
    dispatch({
      type: "CHANGE_LANGUAGE",
      payload: language
    })
  }
  console.log("in globalstate.js", changeLanguage);

  //event handlers that calls disptach and pass in action type and payload:

  return (
    <GlobalContext.Provider value={{ 
      language: state.language,
      changeLanguage
     }}>
      {children}
    </GlobalContext.Provider>
  )
}
