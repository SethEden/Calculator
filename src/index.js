/**
 * @file index.js
 * @module application
 * @description A small command line calculator application.
 * @requires module:myMath
 * @requires module:prompt
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/11/16
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var myMath = require('./myMath');
var prompt = require('./prompt');
var path = require('path');
global.appRoot = path.resolve(process.cwd());
var rootPath = '';
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `application.${baseFileName}.`;

/**
 * @function application
 * @description This is the main program loop, the init for the entire application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/11/16
 */
function application() {
  let functionName = application.name;
  let argumentDrivenInterface = false;
  let commandInput;
  let commandResult;
  let inputData1 = 0;
  let inputData2 = 0;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log('BEGIN main program loop');
  if (argumentDrivenInterface === false) {
    while (programRunning) {
      commandInput = prompt.prompt('Enter a math operation: ');

      if (commandInput.toUpperCase().trim() === 'EXIT' ||
      commandInput.toUpperCase().trim() === 'QUIT' ||
      commandInput.toUpperCase().trim() === 'Q' ||
      commandInput.toUpperCase().trim() === 'X') {
        programRunning = false;
        console.log('END main program loop');
        console.log('Exiting, Good bye, Have a nice day & stay safe!')
      } else if (commandInput.toUpperCase().trim() === 'ADD') {
        // TODO: Add Code Here!!
        let addResult;
        console.log('sum is: ' + addResult);
      } else if (commandInput.toUpperCase().trim() === 'SUBTRACT') {
        // TODO: Add Code Here!!
        let subtractResult;
        console.log('difference is: ' + subtractResult);
      } else if (commandInput.toUpperCase().trim() === 'FACTORIAL') {
        // TODO: Add Code Here!!
        let factorialResult;
        console.log('factorial result is: ' + factorialResult);
      } // TODO: Add code for Multiply & Divide
    }
  }
  console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function getUserInput
 * @description Gets an input number from the user and validates that it is an integer.
 * @param {string} message The string message to query the user for input.
 * @return {integer} An integer value converted from the user input.
 * @author Seth Hollingsead
 * @date 2021/12/22
 */
function getUserInput(message) {
  let functionName = getUserInput.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`message is: ${message}`);
  let returnData = 0;
  let inputData;

  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

var programRunning = false;
programRunning = true;
application();
