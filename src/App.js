import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import CounterAsClass from "./components/CounterAsClass/CounterAsClass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <CounterAsClass/>
      </header>
    </div>
  );
}

export default App;
