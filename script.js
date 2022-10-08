const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("How much is on your ATHop? ", (value) => {
  console.log(`The value is ${value}!`);
  console.log(
    "The amount left over after single trip is: ",
    subtractSingleTrip(value)
  );
  console.log(
    "The amount after a day trip (back and forth is): ",
    subtractFullDay(value)
  );
  readline.close();
});

function subtractSingleTrip(a) {
  return (num = parseFloat(a) - 1.55);
}

function subtractFullDay(a) {
  return (num = parseFloat(a) - 3);
}

function subtractSingleTripSnapper(a) {
  return (num = parseFloat(a) - 1.55);
}

function subtract10Trip(a) {
  return (num = parseFloat(a) - 33);
}
