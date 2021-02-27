window.onload = chooseQuote;

var quotes = new Array(
  "https://designerdev.in/wp-content/uploads/2021/01/RF-15.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-14.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-13.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-12.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-11.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-10.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-9.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-8.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-7.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-6.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-5.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-4.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-3.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-2.png",
  "https://designerdev.in/wp-content/uploads/2021/01/RF-1.png"
);

var body = document.getElementById("body");
var refresh = document.getElementById("refresh");
var stressedButton = document.getElementById("custom-button");
var returnButton = document.getElementById("return-button");

function chooseQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  body.style.backgroundImage = `url(${quotes[randomNum]})`;
}

refresh.addEventListener("click", chooseQuote);

stressedButton.addEventListener("click", showPopup);

returnButton.addEventListener("click", hidePopup);

function showPopup() {
  var popup = document.getElementById("popup-stress");
  popup.style.display = "block";
  stressedButton.style.display = "none";
  breatheanimation();
}

function hidePopup() {
  var popup = document.getElementById("popup-stress");
  popup.style.display = "none";
  stressedButton.style.display = "block";
}

const container = document.getElementById("container");
const text = document.getElementById("text");

const totaltime = 7500;
const breathetime = (totaltime / 5) * 2;
const holdtime = totaltime / 5;

var breathein = document.getElementById("breathein");
var hold = document.getElementById("hold");
var breatheout = document.getElementById("breatheout");

function breatheanimation() {
  text.innerText = "Breathe in";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "Breathe Out";
      container.className = "container shrink";
    }, holdtime);
  }, breathetime);

  setTimeout(breatheanimation, 9000);
}
