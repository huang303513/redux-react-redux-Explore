import React from 'react';
import './App.css';
import store from './store';
import { Provider } from './react-redux';
import Counter from './components/Counter';
import Pannel from './components/Pannel';

function App() {
  return (
    <div className="App">
      <Pannel />
      <Provider store={store}>
        <Counter />
     </Provider>
   </div>
  );
}

export default App;
