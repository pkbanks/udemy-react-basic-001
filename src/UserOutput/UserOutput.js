import React from 'react';

class UserOutput extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.username}</h2>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
    );
  }
}

export default UserOutput;