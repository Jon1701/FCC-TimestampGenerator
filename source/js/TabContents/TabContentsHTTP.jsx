import React from 'react';
import classNames from 'classnames';

export default class TabContentsHTTP extends React.Component {


  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {

    // Classes for this component render.
    var myClasses = classNames({
      'tab-active': this.props.active,
      'hidden': this.props.active == false,
      'container-tab-contents': true
    })

    return (
      <div className={myClasses}>
        HTTP Contents
      </div>
    )
  }

}
