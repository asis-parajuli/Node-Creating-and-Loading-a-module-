//console.log(module);
// In node every file is a module and the variables and the function that are defined in that
// file are scope to that module and they are not availale outside of that module

// we use require to path through another module
var logger = require("./logger");
// if another module was in the parent folder we use ../
// the require function returns the object that is exported from this targeted module

//console.log(logger);

logger.log("message");
