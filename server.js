// ExpressJS.
var express = require('express');
var app = express();

app.get('/timestamp/:userInput', function(req, res) {

  // Convert Date object to natural date string.
  var getNaturalDateString = function(date) {

    // Maps month numbers to month names
    var numToMonth = {
      '1': 'January',
      '2': 'February',
      '3': 'March',
      '4': 'April',
      '5': 'May',
      '6': 'June',
      '7': 'July',
      '8': 'August',
      '9': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    };

    // Extract the month, day, and year from the Date object.
    var month = numToMonth[date.getMonth() + 1];
    var day = String(date.getDate());
    var year = String(date.getFullYear());

    // Return natural date string if possible.
    if (month == null || day == null || year == null) {

      // If any of the month, day, or year, are null, just return null.
      return null;

    } else {

      // Return the formatted natural date string.
      return month + ' ' + day + ', ' + year;
    }

  }

  // Store results in an object.
  var results = {
    'natural': null,
    'unix': null
  }

  // Get the route parameters, and convert to a JS date object..
  var date = new Date(req.params['userInput']);

  // Calculate natural date string, and store it.
  var natural = getNaturalDateString(date);
  results['natural'] = natural;

  // Get UNIX timestamp, and store it.
  var unix = Math.floor(date / 1000);
  results['unix'] = function() {

    // Check if a valid timestamp.
    if (unix <= 0 || unix == null) {

      // If timestamp is pre-1970, return null.
      return null;

    } else {

      // Return timestamp.
      return unix;
    }

  }();

  // Return the results to client.
  res.send(results);

});

// Root folder. Serve index.html.
app.use(express.static('build'));
app.get('/', function(req, res) {
  res.render(__dirname + '/build/index.html');
});

// Listen on port 8080.
app.listen(8080, function() {
  console.log('Listening for connections on PORT 8080');
});
