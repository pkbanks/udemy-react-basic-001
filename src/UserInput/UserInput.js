import React from 'react';

class UserInput extends React.Component {

  changeHandler = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <input type="text" onChange={this.props.changeUserName} />
    );
  }
}

export default UserInput;