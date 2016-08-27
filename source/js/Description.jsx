import React from 'react';
import classNames from 'classnames';

export default class Description extends React.Component {

  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {

    // Classes for this component render.
    var myClasses = classNames({
      'container-description': true,
      'text-center': true,
      'tab-active': true,
    });

    return (
      <div className={myClasses}>
        Description
      </div>
    )
  }

}
