import React, { Component } from 'react';
import NamesList from './components/NamesList';
import Credit from './components/Credit';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NamesList data={this.props.data} />
        <Credit />
      </div>
    )
  }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }