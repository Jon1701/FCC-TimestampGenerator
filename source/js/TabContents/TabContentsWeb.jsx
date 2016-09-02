import React from 'react';
import classNames from 'classnames';

import $ from 'jquery';

export default class TabContentsWeb extends React.Component {

  componentDidMount() {

    // Reference to component.
    var thisComp = this;

    // When the Submit button is clicked, send HTTP GET request, store results
    // in the state.
    $("#btn-submit").on("click", function(e) {

      // Prevent default action.
      e.preventDefault();

      // Get the value of the natural date / unix timestamp textbox.
      var dateVal = $("#textinput-date").val();

      // HTTP GET Request to /timestamp/
      var jqxhr = $.getJSON("/timestamp/" + dateVal);

      // Store the results of the HTTP GET request.
      jqxhr.done(function(data) {
        thisComp.setState({
          results: data,
          found: true,
        })
      });

      // Error check.
      jqxhr.fail(function(e) {
        thisComp.setState({
          error: "Invalid Date"
        });
      });

    });// end submit onclick.

    // When the Reset button is clicked, restore initial state.
    $("#btn-clear").on("click", function(e) {

      // Prevent default action.
      e.preventDefault();

      // Reset textbox.
      $("#textinput-date").val("");

      // Restore Initial state.
      thisComp.setState({
        results: {
          natural: null,
          unix: null
        },
        error: null,
        found: false
      })

    });

  }

  // Component constructor.
  constructor() {
    super();

    // Default state
    this.state = {
      results: {
        natural: null,
        unix: null
      },
      found: false
    }
  }

  // Component render.
  render() {

    // Classes for this component render.
    var myClasses = classNames({
      'container-tab-contents': true,
      'container-tab-contents-web': true,
      'tab-active': this.props.active,
      'hidden': this.props.active == false,
      'text-center': true,
    })

    // Classes for results section.
    var resultsClasses = classNames({
      'hidden': this.state.found == false,
      'container-results': true,
      'text-center': true,
    });

    return (
      <div className={myClasses}>

        <div className="container-form text-center">
          <div className="container-description">
            Enter a Natural Date or a Unix Timestamp:
          </div>

          <div className="container-input">
            <input type="text" id="textinput-date"/>
          </div>

          <div className="container-error text-center">{ this.state.error }</div>

          <div className="container-buttons">
            <button id="btn-submit">Convert</button>
            <button id="btn-clear">Clear</button>
          </div>
        </div>

        <div className={resultsClasses}>

          <div className="table">
            <div className="row">
              <div className="col">
                Natural Date:
              </div>
              <div className="col">
                { String(this.state.results.natural) }
              </div>
            </div>

            <div className="row">
              <div className="col">
                UNIX Timestamp:
              </div>
              <div className="col">
                { String(this.state.results.unix) }
              </div>
            </div>
          </div>


        </div>

      </div>
    )
  }

}
