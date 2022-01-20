import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Display from './Display';

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const resetNumber = () => setCounter(0);

  return (
    <div className="App">
      <Display counter={counter}/>
      <button onClick={resetNumber}>
        Reset
      </button>
      <button onClick={increase}>
        Add
      </button>
    </div>
  )
}

export default App;
