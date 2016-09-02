import React from 'react';
import classNames from 'classnames';

export default class Tab extends React.Component {

  // Component constructor.
  constructor() {
    super();

  }

  // Function to set this tab as active.
  setActiveTab() {

    // Access the handleTabClick() callback and pass in the ID number of this
    // tab.
    this.props.handleTabClick(this.props.tabId);
  }

  // Component render.
  render() {

    // Classes for this tab.
    var myClasses = classNames({
      'tab': true,
      'text-center': true,
      'tab-active': this.props.active
    });

    return (
      <div className={myClasses} onClick={this.setActiveTab.bind(this)}>
        {this.props.contents}
      </div>
    )
  }

}
