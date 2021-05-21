export default(state, action) => {
  console.log("in LanguageReducer; state: ", state);
  switch(action.type){
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}

//export default LanguageReducer;