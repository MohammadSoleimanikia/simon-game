var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  // choose between 0 to 3
  var randomNumber = Math.floor(Math.random() * 4);
  //choose a random color from buttons
  var randomChosenColor = buttonColors[randomNumber];
  //add the random color to the pattern
  gamePattern.push(randomChosenColor);
  //   add flash animation to selected button
  $("#" + randomChosenColor)
    .fadeOut(300)
    .fadeIn(300);
  // play selected button audio
  playSound(randomChosenColor);
}

//add click event listener to buttons
$(".btn").on("click", (event) => {
  // current target is the element that clicked.
  var userChosenColor = $(event.currentTarget).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

//play corresponding sound with name
function playSound(name) {
  var audio = new Audio("./assets/sounds/" + name + ".mp3");
  audio.play();
}

// animate the pressed button
function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  //remove class with a 100 ms delay
  setTimeout(() => {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}
