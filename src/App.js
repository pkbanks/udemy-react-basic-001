import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

  state = {
    persons: [
      { name: "PK", age: 38 },
      { name: "Carolina", age: 40 },
      { name: "Nathaniel", age: 1 }
    ],
    username: "elon_musk"
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "PK", age: 38 },
        { name: event.target.value, age: 40 },
        { name: "Nathaniel", age: 1 }
      ]
    });
  }

  changeUserName = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I\'m a react app!!!'));
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return(
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button style={style} onClick={ this.switchNameHandler.bind(this, "Paul K Banks" ) }>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={ this.state.persons[0].age } />
        <Person
          name={this.state.persons[1].name}
          age={ this.state.persons[1].age }
          click={ this.switchNameHandler.bind(this, "Paul") } 
          changed={ this.nameChangedHandler }/>
        <Person
          name={this.state.persons[2].name}
          age={ this.state.persons[2].age } >
        </Person>

        <UserOutput username={this.state.username} />

        <UserInput changeUserName={this.changeUserName} />
      </div>
    )
  }
}

export default App;
