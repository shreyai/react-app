import React from 'react';
import './App.css';
import Professional from './Professional/Professional';


function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React Component</h1>
      <Professional name="Ravi Singh" profession="Software Engineer" />
      <Professional name="Monu Singh" profession="Mechanical Engineer" />
      <Professional name="Arijit Singh" profession="Musician" />
    </div>
  );
}

export default App;
