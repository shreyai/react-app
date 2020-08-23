// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Professional from './Professional/Professional';
import Counter from './Counter/Counter';

class App extends Component {
  state = {
    professionals : [
      { id: 'abc1', name: 'Ravi Singh', profession: 'Software Engineer' },
      { id: 'abc2', name: 'Mony Singh', profession: 'Mechanical Engineer' },
      { id: 'abc3', name: 'Arijit Singh', profession: 'Musician' }
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

  nameChangeHandler = (event, id) => {
    const professionalIndex = this.state.professionals.findIndex(p => {
      return p.id === id;
    });
    const professional = {
      ...this.state.professionals[professionalIndex]
    };
    professional.name = event.target.value;
    const professionals = [...this.state.professionals]
    professionals[professionalIndex] = professional;
    this.setState({professionals: professionals});
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

    let professionals = null;

    if (this.state.showProfessionals) {
      professionals = (
        <div>
          {this.state.professionals.map(professional => {
            return <Professional 
              name={professional.name} 
              professiona={professional.professional}
              key={professional.id}
              changed={(event) => this.nameChangeHandler(event, professional.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React Component</h1>
        {/* <Counter buttonStyle={style} /> */}
        <button style={style} onClick={this.toggleProfessionalHandler}>Toggle Professionals</button>
        { professionals } 
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
//     ],
//     showProfessionals: false
//   });

//   const switchNameHandler = (newName) => {
//     setProfessionalState({
//       professionals : [
//         { name: newName, profession: 'Software Engineer' },
//         { name: 'Shreya Vishwakarma', profession: 'Mechanical Engineer' },
//         { name: 'Kanchan Kotiya', profession: 'Musician' }
//       ] 
//     })
//   }

//   const toggleProfessionalHandler = () => {
//     const doesShow = professionalState.showProfessionals;
//     setProfessionalState({showProfessionals: !doesShow})
//   }

//   const style = {
//     backgroundCOlor: '#fff',
//     font:'inherit',
//     border:'1px solid blue',
//     padding: '10px',
//     cursor: 'pointer',
//     boxShadow: '4px 4px 16px #ccc'
//   }

//   let professional = null;

//   if(professionalState.showProfessionals) {
//     professional = (
//       <div>
//         <Professional 
//           name={professionalState.professionals[0].name} 
//           profession={professionalState.professionals[0].profession}
//           buttonStyle={style} />
//         <Professional 
//           name={professionalState.professionals[1].name} 
//           profession={professionalState.professionals[1].profession}
//           buttonStyle={style} />
//         <Professional 
//           name={professionalState.professionals[2].name} 
//           profession={professionalState.professionals[2].profession}
//           buttonStyle={style} />
//       </div>
//     )
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React Component</h1>
//       <button onClick={toggleProfessionalHandler} style={style}>Toggle Professionals</button>
//       { professional }
//     </div>
//   );
// }

export default App;
