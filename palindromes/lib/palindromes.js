function isPalindrome(s) {

  var noSpace = s.replace(/ +?/g, "");
  var stringReverse = noSpace.split("").reverse().join("");

  return noSpace === stringReverse;
}

module.exports = isPalindrome;





