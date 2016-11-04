// Lighthouse Labs - W1D5 - Requiring Modules //



  function randMath() {
    return funTimes();
  }

  function funTimes() {
    var randNum = Math.floor(Math.random()*100);
    return "Here is a random number: " + randNum;
  }

module.exports = {randMath};





