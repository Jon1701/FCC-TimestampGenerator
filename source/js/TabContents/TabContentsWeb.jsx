import React from 'react';
import classNames from 'classnames';

export default class TabContentsWeb extends React.Component {


  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {

    // Classes for this component render.
    var myClasses = classNames({
      'tab-active': this.props.active,
      'hidden': this.props.active == false
    })

    return (
      <div className={myClasses}>
        Web Contents
      </div>
    )
  }

}
