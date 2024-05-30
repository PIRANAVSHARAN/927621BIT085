import React from 'react';
import DataFetcher from './components/DataFetcher';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Full-Stack App</h1>
        <DataFetcher />
      </header>
    </div>
  );
}

export default App;
