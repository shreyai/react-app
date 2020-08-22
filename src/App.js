import React, { useState } from 'react';
import './App.css';
import Professional from './Professional/Professional';


function App() {

  const [ professionalState, setProfessionalState ] = useState({
    professionals : [
      { name: 'Ravi Singh', profession: 'Software Engineer' },
      { name: 'Mony Singh', profession: 'Mechanical Engineer' },
      { name: 'Arijit Singh', profession: 'Musician' }
    ]
  })

  return (
    <div className="App">
      <h1>Hi, I'm a React Component</h1>
      <Professional name={professionalState.professionals[0].name} profession={professionalState.professionals[0].profession} />
      <Professional name={professionalState.professionals[1].name} profession={professionalState.professionals[1].profession} />
      <Professional name={professionalState.professionals[2].name} profession={professionalState.professionals[2].profession} />
    </div>
  );
}

export default App;
