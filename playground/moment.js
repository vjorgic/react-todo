var moment = require('moment');

console.log(moment().format());

// January 1st 1970 at 12AM => 0

var now = moment();
console.log('Current timestamp: ', now.unix());

var timeStamp = 1499803451;
var currentMoment = moment.unix(timeStamp);
console.log('Current moment: ', currentMoment.format('MMM D, YY @ h:mm a'));


console.log('Current moment: ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
