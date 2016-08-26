import React from 'react';
import ReactDOM from 'react-dom';

import TabContainer from './TabContainer.jsx';

class UserInterface extends React.Component {

  handleActiveTabChange(tabId) {
    this.setState({
      activeTab: tabId
    });
  }

  // Component constructor.
  constructor() {
    super();

    // Default state.
    this.state = {
      activeTab: 0  // Currently active tab.
    }
  }

  // Component render.
  render() {
    return (
      <div>

        <TabContainer activeTab={this.state.activeTab} handleTabClick={this.handleActiveTabChange.bind(this)}/>

      </div>
    )
  }

}

ReactDOM.render(<UserInterface/>, document.getElementById('react-target'));
