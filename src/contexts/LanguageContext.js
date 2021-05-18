import React from 'react';

const context = React.createContext('english');//here you are passing a default value directly

console.log(context); //--> you'd see a Provider property in the object returned by calling React.createContext

export default context; 
