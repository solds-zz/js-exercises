var low = 0;
var high = 100;
var guess = 50;
var correct = false;
var input = "";
var turns = 0;

alert("Type 'lower' if your number is lower, 'higher' if it's higher, or 'correct' if it's the right number.")

while(!correct) {
	guess = Math.round((low + high) / 2);
	input = prompt(guess);
  if (input.toLowerCase() == "lower") {
  	high = guess;
  }
  else if (input.toLowerCase() == "higher") {
  	low = guess;
  }
  else if (input.toLowerCase() == "correct") {
  	correct = true;
  }
  else {
  	alert("You didn't enter 'lower', 'higher', or 'correct'. Try again.");
    continue;
  }
  turns++;
}

alert("It took me " + turns + " turns to guess your number!");
