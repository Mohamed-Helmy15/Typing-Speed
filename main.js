document.querySelector(".game-container").style.display = "none";
let input = document.querySelector("input");
let level = document.querySelector(".game-container .title .level");
let numWords = document.querySelector(".game-container .title .num-words");
let allWords = document.querySelector(".all-words");
let activeWords = document.querySelector(".active-word");
let remainWords = document.querySelector(".remain span");
let time = document.querySelector(".time span");
let counter;
let length = 20;
let good = document.querySelector(".good");
let bad = document.querySelector(".over");
let reset = document.querySelector(".reset");
good.style.display = "none";
bad.style.display = "none";
reset.style.display = "none";
let easyWords = [
  "html",
  "css",
  "react",
  "sass",
  "gulp js",
  "pug js",
  "php",
  "sql",
  "name",
  "face",
  "twitter",
  "insta",
  "tiktok",
  "hello",
  "ready",
  "go",
  "suiii",
  "sport",
  "level",
  "easy",
];

let mediumWords = [
  "Html",
  "css",
  "react",
  "sass",
  "gulp Js",
  "Pug Js",
  "php",
  "sql",
  "name",
  "Face Book",
  "Twitter",
  "Insta",
  "tiktok",
  "Hello",
  "ready",
  "go",
  "suiii",
  "Sport",
  "level",
  "Medium",
];

let hardWords = [
  "Html",
  "Css",
  "React",
  "Sass",
  "Gulp Js",
  "Pug Js",
  "Arrow Function",
  "MySql",
  "Name",
  "Spread Operator",
  "Twitter",
  "Insta",
  "TikTok",
  "Hello",
  "Ready",
  "Destructuring",
  "Suiii",
  "Sport",
  "Level",
  "HARD",
];

document.querySelector(".start").onclick = function () {
  let selectValue = document.querySelector("select").value;
  document.querySelector(".selection").style.display = "none";
  document.querySelector(".game-container").style.display = "block";
  input.focus();
  game(selectValue);
};
function game(level) {
  if (level === "easy") {
    easy();
  } else if (level === "medium") {
    medium();
  } else {
    hard();
  }
}

function easy() {
  time.innerHTML = 5;
  level.classList.add("easy");
  level.innerHTML = "easy";
  numWords.innerHTML = length;
  customizeGame(easyWords);
  input.value = "";
  result("easy");
}

function medium() {
  time.innerHTML = 5;
  level.classList.add("medium");
  level.innerHTML = "medium";
  numWords.innerHTML = length;
  customizeGame(mediumWords);
  input.value = "";
  result("medium");
}

function hard() {
  time.innerHTML = 5;
  level.classList.add("hard");
  level.innerHTML = "hard";
  numWords.innerHTML = length;
  customizeGame(hardWords);
  input.value = "";
  result("hard");
}

function customizeGame(level) {
  activeWords.innerHTML = "";
  allWords.innerHTML = "";
  let randomNumber = Math.floor(Math.random() * +remainWords.innerHTML);
  // console.log(randomNumber)
  let span = document.createElement("span");
  span.append(level[randomNumber]);
  activeWords.append(span);
  level.splice(randomNumber, 1);
  level.forEach((word) => {
    let div = document.createElement("div");
    div.append(word);
    allWords.append(div);
  });
}

function result(level) {
  let counter = setInterval(() => {
    +time.innerHTML--;
    if (+time.innerHTML == 0) {
      let target = document.querySelector(".active-word span");
      clearInterval(counter);

      if (level === "easy") {
        if (
          input.value.trim().toLowerCase() === target.innerHTML.toLowerCase()
        ) {
          +remainWords.innerHTML--;
          if (+remainWords.innerHTML == 0) {
            clearInterval(counter);
            document.querySelector(".game-container").style.display = "none";
            good.style.display = "block";
            reset.style.display = "block";
          } else {
            easy();
          }
        } else {
          clearInterval(counter);
          document.querySelector(".game-container").style.display = "none";
          bad.style.display = "block";
          reset.style.display = "block";
        }
      } else if (level === "medium") {
        if (input.value.trim() === target.innerHTML) {
          +remainWords.innerHTML--;
          if (+remainWords.innerHTML == 0) {
            clearInterval(counter);
            document.querySelector(".game-container").style.display = "none";
            good.style.display = "block";
            reset.style.display = "block";
          } else {
            medium();
          }
        } else {
          clearInterval(counter);
          document.querySelector(".game-container").style.display = "none";
          bad.style.display = "block";
          reset.style.display = "block";
        }
      } else if (level === "hard") {
        if (input.value.trim() === target.innerHTML) {
          +remainWords.innerHTML--;
          if (+remainWords.innerHTML == 0) {
            clearInterval(counter);
            document.querySelector(".game-container").style.display = "none";
            good.style.display = "block";
            reset.style.display = "block";
          } else {
            hard();
          }
        } else {
          clearInterval(counter);
          document.querySelector(".game-container").style.display = "none";
          bad.style.display = "block";
          reset.style.display = "block";
        }
      }
    }
  }, 1000);
}

reset.onclick = function () {
  window.location.reload();
};
