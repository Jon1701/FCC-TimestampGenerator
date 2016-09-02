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
        <h1>Timestamp Generator</h1>

        <p>
          Converts between a Natural Language Date (eg. January 1, 2017) and Unix Epoch Time (eg. 1483246800).
        </p>

        <h3>
          What is Unix Time?
        </h3>
        <p>
          Unix time (also known as POSIX time or Epoch time) is a system for describing instants in time, defined as the number of seconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970, not counting leap seconds.
          <br/>
          <a href="http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_15" target="_blank">[Source]</a>
        </p>

      </div>
    )
  }

}
