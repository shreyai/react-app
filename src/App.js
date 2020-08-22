import React, { useState } from 'react';
import './App.css';
import Professional from './Professional/Professional';
import Counter from './Counter/Counter';


function App() {

  const [ professionalState, setProfessionalState ] = useState({
    professionals : [
      { name: 'Ravi Singh', profession: 'Software Engineer' },
      { name: 'Mony Singh', profession: 'Mechanical Engineer' },
      { name: 'Arijit Singh', profession: 'Musician' }
    ]
  })

  const switchNameHandler = (newName) => {
    setProfessionalState({
      professionals : [
        { name: newName, profession: 'Software Engineer' },
        { name: 'Shreya Vishwakarma', profession: 'Mechanical Engineer' },
        { name: 'Kanchan Kotiya', profession: 'Musician' }
      ] 
    })
  }

  const style = {
    backgroundCOlor: '#fff',
    font:'inherit',
    border:'1px solid blue',
    padding: '10px',
    cursor: 'pointer',
    boxShadow: '4px 4px 16px #ccc'
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React Component</h1>
      <Counter buttonStyle={style} />
      <Professional 
        name={professionalState.professionals[0].name} 
        profession={professionalState.professionals[0].profession} 
        click={switchNameHandler.bind(this, 'Ravi')} 
        buttonStyle={style} />
      <Professional 
        name={professionalState.professionals[1].name} 
        profession={professionalState.professionals[1].profession} 
        click={switchNameHandler}
        buttonStyle={style} />
      <Professional 
        name={professionalState.professionals[2].name} 
        profession={professionalState.professionals[2].profession} 
        click={switchNameHandler}
        buttonStyle={style} />
    </div>
  );
}

export default App;
