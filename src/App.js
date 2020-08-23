// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Professional from './Professional/Professional';
import Counter from './Counter/Counter';

class App extends Component {
  state = {
    professionals : [
      { name: 'Ravi Singh', profession: 'Software Engineer' },
      { name: 'Mony Singh', profession: 'Mechanical Engineer' },
      { name: 'Arijit Singh', profession: 'Musician' }
    ],
    showProfessionals: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      professionals : [
        { name: newName, profession: 'Software Engineer' },
        { name: 'Mony Singh', profession: 'Mechanical Engineer' },
        { name: 'Arijit Singh', profession: 'Musician' }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      professionals : [
        { name: 'Ravi Kumar Singh', profession: 'Software Engineer' },
        { name: event.target.value, profession: 'Mechanical Engineer' },
        { name: 'Arijit Singh', profession: 'Musician' }
      ]
    });
  }

  toggleProfessionalHandler = () => {
    const doesShow = this.state.showProfessionals;
    this.setState({showProfessionals: !doesShow})
  }

  render() {
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
        {/* <Counter buttonStyle={style} /> */}
        <button style={style} onClick={this.toggleProfessionalHandler}>Toggle Professionals</button>
        {
          this.state.showProfessionals ?
          <div>
            <Professional 
              name={this.state.professionals[0].name} 
              profession={this.state.professionals[0].profession}
              buttonStyle={style} />
            <Professional 
              name={this.state.professionals[1].name} 
              profession={this.state.professionals[1].profession} 
              click={this.switchNameHandler}
              buttonStyle={style} />
            <Professional 
              name={this.state.professionals[2].name} 
              profession={this.state.professionals[2].profession}
              buttonStyle={style} />
          </div> : null
        }
      </div>
    );
  }
}


// function App() {

//   const [ professionalState, setProfessionalState ] = useState({
//     professionals : [
//       { name: 'Ravi Singh', profession: 'Software Engineer' },
//       { name: 'Mony Singh', profession: 'Mechanical Engineer' },
//       { name: 'Arijit Singh', profession: 'Musician' }
//     ]
//   })

//   const switchNameHandler = (newName) => {
//     setProfessionalState({
//       professionals : [
//         { name: newName, profession: 'Software Engineer' },
//         { name: 'Shreya Vishwakarma', profession: 'Mechanical Engineer' },
//         { name: 'Kanchan Kotiya', profession: 'Musician' }
//       ] 
//     })
//   }

//   const style = {
//     backgroundCOlor: '#fff',
//     font:'inherit',
//     border:'1px solid blue',
//     padding: '10px',
//     cursor: 'pointer',
//     boxShadow: '4px 4px 16px #ccc'
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React Component</h1>
//       <Counter buttonStyle={style} />
//       <Professional 
//         name={professionalState.professionals[0].name} 
//         profession={professionalState.professionals[0].profession} 
//         click={switchNameHandler.bind(this, 'Ravi')} 
//         buttonStyle={style} />
//       <Professional 
//         name={professionalState.professionals[1].name} 
//         profession={professionalState.professionals[1].profession} 
//         click={switchNameHandler}
//         buttonStyle={style} />
//       <Professional 
//         name={professionalState.professionals[2].name} 
//         profession={professionalState.professionals[2].profession} 
//         click={switchNameHandler}
//         buttonStyle={style} />
//     </div>
//   );
// }

export default App;
