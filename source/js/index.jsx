import React from 'react';
import ReactDOM from 'react-dom';

class UserInterface extends React.Component {

  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {
    return (
      <div>

        Hello World

      </div>
    )
  }

}

ReactDOM.render(<UserInterface/>, document.getElementById('react-target'));
