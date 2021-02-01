'use strict';
/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')
// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') 
*/

//* My solution:
function removeUrlAnchor(url) {
  const index = url.indexOf('#');
  console.log(url.includes('#') ? url.slice(0, index) : `${url}/`);
  return url.includes('#') ? url.slice(0, index) : `${url}/`;
}

// codewar:
// function removeUrlAnchor(url) {
//   console.log(url.split('#'));
//   return url.split('#')[0];
// }

// removeUrlAnchor('www.codewars.com/katas');
// removeUrlAnchor('www.codewars.com#about');
