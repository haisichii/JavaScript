const character = "*";
const count = 15;
const rows = [];

//Normal or upside down flag
let inverted = false;

// Add white space before and after stars.
// Space is Total Rows - Current Row Number
// Stars is 2 * Current Row Number - 1. (Formulae for it)
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

//Start from 1 since 0 is empty.
//Total iterations is count 
//Check flag if inverted or not
//Add to our rows Array at start or end the returned result of each line from our function
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

//Print Result in variable
let result = ""

//Row is now populated, we iterate through every row in it
//We concatenate every index of row to 'result'
//Each row we add is another iteration of the for loop
//Hence every row is on a new line
for (const row of rows) {
  result = result + "\n" + row;
  //Could write result += '\n' + row
}

console.log(result);