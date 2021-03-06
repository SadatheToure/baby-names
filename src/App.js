import React, { Component } from 'react';
import NamesList from './components/NamesList';
import Credit from './components/Credit';
import Search from './components/Search';
import ShortList from './components/ShortList';
// import logo from './logo.svg';
import 'normalize-css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <main>
          <ShortList />
          <NamesList data={this.props.data} />
          <Credit />
        </main>
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