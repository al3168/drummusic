// codice che si occupa di rlevare la pressione dei pulsanti

let PulsantiTamb = document.querySelectorAll(".drum").length;

for (let i = 0; i < PulsantiTamb; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    Suona(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// parte di codice che si occupa di rilevare la digitazione sulla tastiera
document.addEventListener("keydown", function (event) {
  Suona(event.key);
  buttonAnimation(event.key);
});

function Suona(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let Tom2 = new Audio("sounds/tom-2.mp3");
      Tom2.play();
      break;
    case "s":
      let Tom3 = new Audio("sounds/tom-3.mp3");
      Tom3.play();
      break;
    case "d":
      let Tom4 = new Audio("sounds/tom-4.mp3");
      Tom4.play();
      break;
    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentkey) {
  let activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

$("h1").css("color", "yellow");
//console.log((this.style.color = "yellow")); per cambiare colore al testo quando ci clicchiamo
