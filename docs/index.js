var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

//add click event listener to buttons
$(".btn").on("click", (event) => {
  // current target is the element that clicked.
  var userChosenColor = $(event.currentTarget).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});
// start game with one keypress
$("#start-button").on("click", () => {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
    $("#start-button").addClass('hidden');
    $("h1").removeClass('hidden');
  }
});
//play corresponding sound with name----------------------------------------------------
function playSound(name) {
  var audio = new Audio("./assets/sounds/" + name + ".mp3");
  audio.play();
}

// animate the pressed button-----------------------------------------------------------
function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  //remove class with a 100 ms delay
  setTimeout(() => {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

// --------------------------------------------------------------------------------------
function nextSequence() {
  userClickedPattern = [];
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
  //animate the chosen color selection
  animatePress(randomChosenColor);
  level++;
  $("h1").text("level " + level);
}
// check the answer --------------------------------------------------------------
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      //   reset user pattern for new level
    }
  } else {
    startOver();
  }
}

// restart the game ----------------------------------------------------------
function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
  playSound("wrong");
  $("body").addClass("game-over");
  //remove class with a 200 ms delay
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 200);

  $("h1").addClass('hidden');
  $("#start-button").removeClass('hidden');
}
