import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';


const Field = () => {
  const {language} = useContext(GlobalContext);

  const label = language === 'english' ? 'Name' : 'Naam';

  return (
    <div className="ui field">
      <label>{label}</label>
      <input />
    </div>
  )
}

// class Field extends React.Component{
//   static contextType = LanguageContext;

//   render(){
//     const text = this.context === 'english' ? 'Name' : 'Naam';
    
//     return (
//       <div className="ui field">
//         <label>{text}</label>
//         <input />
//       </div>
//     )
//   }
// }

export default Field;