import React, { useContext} from 'react';
import UserCreate from './UserCreate';
import Icons from './Icons';
import { GlobalProvider} from '../contexts/GlobalState';

//refactored into hooks

const App = () => {

  

  return(
    <GlobalProvider>
      <div className="ui container">
            <Icons />
            {/* the "value" prop name is special to the Provider */}
            <UserCreate />
        </div>
      </GlobalProvider>
  )
}

// class App extends React.Component{

//   state={ language: "english" };

//   onLanguageChange = (language) => {
//     this.setState({ language}); //object shorthand
//   };

//   render(){
//     return (
//       <div className="ui container">
//         <div>
//           Select a language:
//           <i 
//             className="flag us" 
//             onClick={()=>this.onLanguageChange('english')}
//           />
//           <i 
//             className="flag nl" 
//             onClick={() => this.onLanguageChange('dutch')} 
//           />
//         </div>
//         <LanguageContext.Provider value={this.state.language}>
//           {/* the "value" prop name is special to the Provider */}
//           <UserCreate />
//         </LanguageContext.Provider>
//       </div>
//     );
//   }
// }

export default App;
