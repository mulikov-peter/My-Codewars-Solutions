'use strict';
/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing" 
*/

//* My solution:
const solution = string => string.split(/(?=[A-Z])/).join(' ');

console.log(solution('breakCamelCase'));
