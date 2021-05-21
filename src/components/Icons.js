import React, { useContext } from 'react';
import { GlobalContext} from '../contexts/GlobalState';

const Icons = () => {

  const {changeLanguage} = useContext(GlobalContext);
  console.log("in App.js; ", changeLanguage);
  return (
    <div> 
      Select a language: 
      <i 
        className="flag us" 
        onClick={() => changeLanguage('english')}
      />
      <i 
        className="flag nl" 
        onClick={() => changeLanguage('dutch')} 
      />
    </div>
  )
}

export default Icons;