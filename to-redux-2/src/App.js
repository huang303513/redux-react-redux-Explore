import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Pannel from './components/Pannel';

function App() {
  return (
    <div className="App">
      <Pannel />
      <Counter />
    </div>
  );
}

export default App;
