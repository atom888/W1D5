// Lighthouse Labs - W1D5 - Requiring Modules //



  function randMath() {
    return funTimes();
  }

  function funTimes() {
    var randNum = Math.floor(Math.random()*100);
    return "Here is a random number: " + randNum;
  }

module.exports = {randMath};


// module.exports = {
//   randomNum = Math.floor(Math.random()*100);
//   explain: function () {
//     console.log(this.randomNum + " was a random number selected between 1 and 100.");

//   funTimes = "Have a good day."

// }


