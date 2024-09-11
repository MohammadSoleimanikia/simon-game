var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  // choose between 0 to 3
  var randomNumber = Math.floor(Math.random() * 4);
  //choose a random color from buttons
  var randomChosenColor = buttonColors[randomNumber];
  //add the random color to the pattern
  gamePattern.push(randomChosenColor);
}
