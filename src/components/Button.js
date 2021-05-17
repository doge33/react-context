import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  //this is how to hookup a context object to a class component 
  //this adds a property to the Button CLASS itself, not to instances of button(inside other jsx)
  //this allows use of this.context
  //NOTE: the name has to be "contextType"
  static contextType = LanguageContext; 

  render(){
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    
    return (
      <button className="ui button primary">{text}</button>
    )
  }
}

export default Button;