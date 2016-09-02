import React from 'react';
import Tab from './Tab.jsx';

export default class TabContainer extends React.Component {

  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {
    return (
      <div className="container-tabs">
        <Tab tabId={0} contents={"via Web"} active={this.props.activeTab == 0} handleTabClick={this.props.handleTabClick} />
        <Tab tabId={1} contents={"via HTTP GET"} active={this.props.activeTab == 1} handleTabClick={this.props.handleTabClick} />
      </div>
    )
  }

}
