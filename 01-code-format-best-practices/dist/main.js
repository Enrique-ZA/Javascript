// uses the .eslintrc.js file to enforce the correct styling

// Bare Block:
/*
    // Enrique-ZA
    // JS Code Formatting
    the above comments now throws an error: expected a block comment instead of
    consecutive line comments 
*/

// Starred Block:
/*
 *  // Enrique-ZA
 *  // JS Code Formatting
 *  the above comments now throws an error: expected a block comment instead of
 *  consecutive line comments 
 */

"use strict";

// Variables ✓
const countryA = 'South Korea'; // ✓
console.log(countryA);;

//Variables ✗
countryB = 'Japan'; // ✗ 
console.log(countryB);

const data = {
    countryA,
    countryB 
} // ✗ - missing a semicolon
