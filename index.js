var drumButton = document.querySelectorAll(".drum");

drumButton.forEach(eachButton);

function eachButton(button) {
  button.addEventListener("click", function () {
    var buttonHTML = this.innerHTML;

    wasPressed(buttonHTML);

    buttonAnimation(buttonHTML);
  });
}

document.addEventListener("keydown", function (event) {
  wasPressed(event.key);

  buttonAnimation(event.key);
});

function wasPressed(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 100);
}
