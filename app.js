// O'XSHAMAGAN USUL(UZUN USUL)

// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll(".drum");

//   function playSound(soundFile) {
//     const audio = new Audio(soundFile);
//     audio.play();
//   }
//   buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const target = e.target;
//       const buttonText = target.textContent;

//       switch (buttonText) {
//         case "w":
//           playSound("sounds/crash.mp3");
//           break;
//         case "a":
//           playSound("sounds/kick-bass.mp3");
//           break;
//         case "s":
//           playSound("sounds/snare.mp3");
//           break;
//         case "d":
//           playSound("sounds/tom-1.mp3");
//           break;
//         case "j":
//           playSound("sounds/tom-2.mp3");
//           break;
//         case "k":
//           playSound("sounds/tom-3.mp3");
//           break;
//         case "l":
//           playSound("sounds/tom-4.mp3");
//           break;
//         default:
//       }
//     });
//   });
// });

//  VAZIFA

const buttons = document.querySelectorAll(".drum");

const soundsName = {
  w: "crash",
  a: "kick-bass",
  s: "snare",
  d: "tom-1",
  j: "tom-2",
  k: "tom-3",
  l: "tom-4",
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (key in soundsName) {
      if (button.textContent == key) {
        let sound = new Audio(`./sounds/${soundsName[key]}.mp3`);
        sound.play();
      }
    }
  });
});

document.addEventListener("keydown", (e) => {
  for (key in soundsName) {
    if (e.key == key) {
      let sound = new Audio(`./sounds/${soundsName[key]}.mp3`);
      sound.play();
    }
  }
});
