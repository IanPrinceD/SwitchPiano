var pianoKeys = document.querySelectorAll(".keys").length;

for (let i = 0; i < pianoKeys; i++) {
  document
    .querySelectorAll(".keys")
    [i].addEventListener("click", function () {
      var buttons = this.innerText;

      buttonAnimation(buttons);
      playSound(buttons);
    });
}

document.addEventListener("keydown", function (e) {
  buttonAnimation(e.key);
  playSound(e.key);
});

function playSound(key) {
  switch (key) {
    case "q":
      var c4 = new Audio("sound/C4.mp3");
      c4.play();
      break;
    case "a":
      var db4 = new Audio("sound/Db4.mp3");
      db4.play();
      break;
    case "w":
      var d4 = new Audio("sound/D4.mp3");
      d4.play();
      break;
    case "s":
      var eb4 = new Audio("sound/Eb4.mp3");
      eb4.play();
      break;
    case "e":
      var e4 = new Audio("sound/E4.mp3");
      e4.play();
      break;
    case "r":
      var f4 = new Audio("sound/F4.mp3");
      f4.play();
      break;
    case "f":
      var gb4 = new Audio("sound/Gb4.mp3");
      gb4.play();
      break;
    case "t":
      var g4 = new Audio("sound/G4.mp3");
      g4.play();
      break;
    case "g":
      var ab4 = new Audio("sound/Ab4.mp3");
      ab4.play();
      break;
    case "y":
      var a4 = new Audio("sound/A4.mp3");
      a4.play();
      break;
    case "h":
      var bb4 = new Audio("sound/Bb4.mp3");
      bb4.play();
      break;
    case "u":
      var b4 = new Audio("sound/B4.mp3");
      b4.play();
      break;
    case "i":
      var c5 = new Audio("sound/C5.mp3");
      c5.play();
      break;
    case "k":
      var db5 = new Audio("sound/Db5.mp3");
      db5.play();
      break;
    case "o":
      var d5 = new Audio("sound/D5.mp3");
      d5.play();
      break;
    case "l":
      var eb5 = new Audio("sound/Eb5.mp3");
      eb5.play();
      break;
    case "p":
      var e5 = new Audio("sound/E5.mp3");
      e5.play();
      break;
    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

    if (currentKey === "a" || currentKey === "s" || currentKey === "f" || currentKey === "g" || currentKey === "h" || currentKey === "k" || currentKey === "l") {
    activeButton.classList.add("black");
  } else {
    activeButton.classList.add("white");
  }

  setTimeout(function () {
    activeButton.classList.remove("black");
    activeButton.classList.remove("white");
  }, 100);
}