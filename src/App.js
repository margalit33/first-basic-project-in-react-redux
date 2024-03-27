import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Lugassy from './features/counter/Lugassy';
import May from './features/counter/May';
import { Login } from './features/counter/Login';

function App() {
  return (
    <div className="App">
        <Counter /> 
        <Lugassy></Lugassy>
        <May></May> 
        <Login></Login>      
    </div>
  );
}

export default App;
