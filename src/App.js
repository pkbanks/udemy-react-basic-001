import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: "PK", age: 38 },
      { name: "Carolina", age: 40 },
      { name: "Nathaniel", age: 1 }
    ]
  }

  switchNameHandler = ( newName ) => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: newName, age: 38 },
        { name: "Carolina", age: 40 },
        { name: "Nathaniel", age: 1 }
      ]
    });
  }

  render() {
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I\'m a react app!!!'));
    return(
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button onClick={ this.switchNameHandler(this, "Paul K Banks" ) }>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={ this.state.persons[0].age } />
        <Person
          name={this.state.persons[1].name}
          age={ this.state.persons[0].age }
          click={ this.switchNameHandler } />
        <Person
          name={this.state.persons[2].name}
          age={ this.state.persons[0].age } >
            <h3>My Hobbies: Coffee</h3>
        </Person>
      </div>
    )
  }
}

export default App;
