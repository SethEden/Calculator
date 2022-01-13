/**
 * @file myMath.js
 * @module myMath
 * @description Implements the math functions.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/11/18
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `application.${baseFileName}.`;

/**
 * @function add
 * @description Adds two numbers together and returns the result.
 * @param {integer} data1 The first number to be added together.
 * @param {integer} data2 The second number to be added together.
 * @returns {integer} The sum of the two input numbers.
 * @author Seth Hollingsead
 * @date 2021/11/18
 */
function add(data1, data2) {
  let functionName = add.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data1 is: ${data1}`);
  console.log(`data2 is: ${data2}`);

  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function subtract
 * @description Subtract two numbers one from another and returns the result.
 * @param {integer} data1 The first number to subtract.
 * @param {integer} data2 The second number to be subtracted.
 * @returns {integer} The difference of the two input numbers.
 * @author Seth Hollingsead
 * @date 2021/12/23
 */
function subtract(data1, data2) {
  let functionName = subtract.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data1 is: ${data1}`);
  console.log(`data2 is: ${data2}`);

  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function multiply
 * @description Multiply two numbers together and return the result.
 * @param {integer} data1 The first number to be multiplied.
 * @param {integer} data2 The second number to be  multiplied.
 * @return {integer} The multiplication of the two input numbers.
 * @author Seth Hollingsead
 * @date 2022/01/13
 */
function multiply(data1, data2) {
  let functionName = multiply.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data1 is: ${data1}`);
  console.log(`data2 is: ${data2}`);

  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function divide
 * @description Divides two numbers, one by the other.
 * data1 / data2
 * @param {integer} data1 The first number to be divided.
 * @param {integer} data2 The denominator in the division operation.
 * @return {integer} The result of the division data1 / data2.
 * @author Seth Hollingsead
 * @date 2022/01/13
 */
function divide(data1, data2) {
  let functionName = divide.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data1 is: ${data1}`);
  console.log(`data2 is: ${data2}`);

  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function factorial
 * @description Computes the factorial of a number using recursion and returns the result.
 * @param {integer} data The number to compute factorial for.
 * @returns {integer} The factorial result.
 * @author Seth Hollingsead
 * @date 2021/12/23
 */
function factorial(data) {
  let functionName = factorial.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`data is: ${data}`);
  let returnData = 0;

  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

module.exports = {
  ['add']: (data1, data2) => add(data1, data2),
  ['subtract']: (data1, data2) => subtract(data1, data2),
  ['multiply']: (data1, data2) => multiply(data1, data2),
  ['divide']: (data1, data2) => divide(data1, data2),
  ['factorial']: (data) => factorial(data)
};
