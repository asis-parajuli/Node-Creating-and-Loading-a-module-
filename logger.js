// a module for login messages
var url = "http://loginsys.org/log";

function log(message) {
  // Send an HTTP request
  console.log(message);
}

// for making scopes public to be accessable to other file
// we use export for this purpose

module.exports.log = log;

//module.exports.endPoint = url;
// internally we could called it url but we can call it endPoint with export
