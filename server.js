// ExpressJS.
var express = require('express');
var app = express();

// API endpoint to get the hostname of the server.
app.get('/hostname', function(req, res) {
  return res.json({
    'hostname': req.hostname
  })
});

// Route to handle case where no user input is given.
// Just return a string signifying what is missing.
app.get('/timestamp', function(req, res) {
  res.send("Missing UNIX timestamp or Natural Language Date.");
});

// Route to handle user input.
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
  var userInput = req.params['userInput'];

  // Check if user input is an integer.
  if (parseInt(userInput)) {

    // Convert userInput as integer.
    intUserInput = parseInt(userInput);

    // Route parameter can be numeric, this implies a possible unix timestamp.
    // Create a JS Date object.
    //
    // Multiply by 1000 seconds since UNIX time is in seconds, but Date()
    // expects milliseconds.
    var date = new Date(intUserInput*1000);

    // Check if valid timestamp.
    // If the time is greater than 0, then it is valid.
    if ((date.getTime()) > 0) {

      // Get the natural date.
      results['natural'] = getNaturalDateString(date);

      // Store unix timestamp.
      results['unix'] = intUserInput;

    }

  } else {

    // If the user input is not an integer, need to parse the string.
    var date = new Date(userInput);

    // Get natural date string.
    results['natural'] = getNaturalDateString(date);

    // Calculate unix timestamp.
    results['unix'] = Math.floor(date.getTime() / 1000);

  }

  // Return the results.
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
