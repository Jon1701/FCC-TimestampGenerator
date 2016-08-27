import React from 'react';
import classNames from 'classnames';

import $ from 'jquery';

export default class TabContentsHTTP extends React.Component {

  // Code which will execute just before initial render.
  componentDidMount() {

    // Reference to this component.
    var thisComp = this;

    // Get hostname via HTTP GET Request.
    var jqxhr = $.getJSON('/hostname');

    // Parse response.
    jqxhr.done(function(data) {
      thisComp.setState({
        hostname: data.hostname
      })
    });

  }


  // Component constructor.
  constructor() {
    super();

    // Initial state. Hostsname.
    this.state = {
      hostname: ''
    }
  }

  // Component render.
  render() {

    // Classes for this component render.
    var myClasses = classNames({
      'tab-active': this.props.active,
      'hidden': this.props.active == false,
      'container-tab-contents': true,
      'container-tab-contents-http': true,
      'text-center': true
    })

    var linkLabel = this.state.hostname;

    return (
      <div className={myClasses}>
        <p>Access the server at <a href={'/timestamp'} target="_blank">{this.state.hostname + '/timestamp/<Date or UNIX Timestamp>'}</a>.</p>

          Example:
            <p>
              <a href={'/timestamp/January 1, 2017'} target="_blank">{linkLabel + '/January 1, 2017'}</a>
            </p>
            <p>
              <a href={'/timestamp/1483246800'} target="_blank">{linkLabel + '/1483246800'}</a>
            </p>
        
      </div>
    )
  }

}
