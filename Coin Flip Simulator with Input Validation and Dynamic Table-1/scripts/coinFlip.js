/*
  Assignment: Week 4 Lab 4
  Author: Kylie Gregory
  Date: 8/1/2020
  Purpose: This provides the functionality to ensure valid data 
  input, and conducts digital coins flips with random
  results of head or tails. The results of each trial are updated
  in a table.
*/

/*
  initialize adds event listeners to handle data validation on the input element
*/
function initialize() {
  var numFlips = document.getElementById("numFlips");
  numFlips.addEventListener("blur", validatenumFlips);
}

/*
  validateFlips provides an alert if the input element's value is
less than 1 or greater than 100.  If it is invalid it also clears the current value.
*/
function validateFlips() {
  var numFlips = document.getElementById("numFlips");
  if (numFlips.value != "") {
    if (numFlips.value < 1 || numFlips.value > 100) {
      alert("Number of flips must be between 1 and 100");
      numFlips.value = "";
    }
  }
}

/*
  update ensures a value has been entered in the numflips
element and provides an alert if there is no value entered.
*/
function update() {
  var numFlips = document.getElementById("numFlips").value;

  if (numFlips === "") {
    alert("You need to enter a number of flips");
  else
    coinFlip(numFlips);
  }
}

/*
  coinFlip will flip two virtual coins the number of times requested by the user.
It will then generate a random result of heads or tails for each coin.
Finally, it will update the data table with the results of each flip.
*/
function coinFlip(numFlips) {
    var resultOne = [];
    var resultTwo = [];
  for (var i = 1; i < numFlips; ++i) {
    var isHead = (Math.floor(Math.random() * 2) == 0);
    if (isHead) {
      resultOne.push("heads");
    } else {
      resultOne.push("tails");
    }

    var isHead = (Math.floor(Math.random() * 2) == 0);
    if (isHead) {
      flip(resultTwo.push("heads"));
    } else {
      flip(resultTwo.push("tails"));
    }
  }
  updateTable(resultOne, resultTwo);
}


/*
  updateTable takes in an array of results from each coin flip. A table is created with these values for each trial number.
*/
function updateTable(resultOne, resultTwo) {
  var dataTable = document.getElementById("data");
  dataTable.innerHTML = "";

  // create rows of data based on given arrays
  for (var i = 0; i < resultOne.length; i++) {
    var row = dataTable.insertRow(-1);
    var trial = row.insertCell(0);
    var resultOne = row.insertCell(1);
    var resultTwo = row.insertCell(2);

    trial.innerHTML = [i+1];
    resultOne.innerHTML = resultOne[i]
    resultTwo.innerHTML = resultTwo[i];
}

  // create header row
  var thead = dataTable.createTHead();
  var row = thead.insertRow(0);
  var tableHeaders = ["Trial #", "Coin 1", "Coin 2"];
  for (var i = 0; i < tableHeaders.length; i++) {
    var headerCell = document.createElement("th");
    headerCell.innerHTML = tableHeaders[i];
    row.appendChild(headerCell);
  }
 }
}