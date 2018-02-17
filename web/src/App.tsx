import * as React from 'react';
import './App.css';
import { NewMushroomComponent } from './NewMushroom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NewMushroomComponent/>
      </div>
    );
  }
}

export default App;
