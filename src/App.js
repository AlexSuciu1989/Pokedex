import './App.css';
import React, { Component} from 'react';
import Pokegame from './Components/Pokegame/Pokegame';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Pokegame/>
      </div>
      )
  }
}

export default App;
