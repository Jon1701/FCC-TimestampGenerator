import React from 'react';
import ReactDOM from 'react-dom';

import Description from './Description.jsx';
import TabContainer from './TabContainer.jsx';
import TabContents from './TabContents/TabContents.jsx';

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

        <Description/>

        <TabContainer activeTab={this.state.activeTab} handleTabClick={this.handleActiveTabChange.bind(this)}/>

        <div className="clearfix"></div>

        <TabContents activeTab={this.state.activeTab} />


      </div>
    )
  }

}

ReactDOM.render(<UserInterface/>, document.getElementById('react-target'));
