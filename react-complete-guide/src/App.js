import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi i'm a react app</h1>
      <p>Other element</p>
    </div>
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi im a react app'));
  );
}

export default App;
