import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 34 },
      { name: 'Stephanie', age: 26  }
    ],
    otherState: 'some other value'
  });

  const [ otherState, setOtherState ] = useState('some other value again');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 34 },
        { name: 'Stephanie', age: 300  }
      ]
    });
  };
 
  return (
    <div className="App">
      <h1>Hi i'm a react app</h1>
      <p>Other element</p>
      <button onClick={() => switchNameHandler('this is a new name')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
       name={personsState.persons[1].name}
       age={personsState.persons[1].age} 
       click={switchNameHandler.bind(this, 'another new name')} >My hobbies: Racing</Person>
      <Person
       name={personsState.persons[2].name}
       age={personsState.persons[2].age} />
    </div>
  );

}

export default App;
