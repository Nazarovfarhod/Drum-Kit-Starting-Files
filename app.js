document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with the class "drum"
  const buttons = document.querySelectorAll(".drum");

  // Function to play sound
  function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }

  // Add event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.target;
      const buttonText = target.textContent;

      switch (buttonText) {
        case "w":
          playSound("sounds/crash.mp3");
          break;
        case "a":
          playSound("sounds/kick-bass.mp3");
          break;
        case "s":
          playSound("sounds/snare.mp3");
          break;
        case "d":
          playSound("sounds/tom-1.mp3");
          break;
        case "j":
          playSound("sounds/tom-2.mp3");
          break;
        case "k":
          playSound("sounds/tom-3.mp3");
          break;
        case "l":
          playSound("sounds/tom-4.mp3");
          break;
        default:
      }
    });
  });
});
