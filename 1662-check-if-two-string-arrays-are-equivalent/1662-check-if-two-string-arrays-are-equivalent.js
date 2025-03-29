/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
 const a = word1.join("");
 const b = word2.join("");
 if(a === b) {
    return true;
 } else {
    return false;
 }
 }
 ;
