
// WhiteanT Part 
// TODO: ekta function banaya dei ja page ta load kore dibo ar active add kore dibo
// Add active class to the current button (highlight it)

var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
}

//



// clock____________________

const alltime = document.querySelector(".clock");
const hour = alltime.querySelector("#hour");
const min = alltime.querySelector("#min");
const sec = alltime.querySelector("#sec");
const day = alltime.querySelector("#day");
const allday = document.querySelector(".dateBox");
const wday = allday.querySelector("#weekDay");
const tarikh = allday.querySelector("#date");
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");


// clock _________________________________________

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const whatIsTheTimeNow = () => {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = h < 11 ? "AM" : "PM";
  h = checkHour(h);
  let DATE;
  let weekDay = today.getDay();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let year = today.getFullYear();
  DATE = month < 10 ? "0" + month : month + " : " + year;
  DATE = date < 10 ? "0" + date : date + " : " + DATE;
  hour.innerHTML = h < 10 ? "0" + h : h;
  min.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;
  day.innerHTML = d;
  wday.innerHTML = daysOfTheWeek[weekDay];
  tarikh.innerHTML = DATE;
};
whatIsTheTimeNow();
setInterval(whatIsTheTimeNow, 1000);

function checkHour(e) {
  if (e > 12) {
    e = e - 12;
    return e;
  } else return e;
}

// stop watch ______________________________________

const stopWatchThings = document.querySelector("#stopWatchPage");
const SWmilisec = stopWatchThings.querySelector("#swMiliSec");
const SWsec = stopWatchThings.querySelector("#swsec");
const SWmin = stopWatchThings.querySelector("#swmin");
const SWhour = stopWatchThings.querySelector("#swhour");
const stopBtn = stopWatchThings.querySelector("#stopBtn");
const pauseBtn = stopWatchThings.querySelector("#pauseBtn");
const startBtn = stopWatchThings.querySelector("#startBtn");

let sMilisec = 0;
let sSec = 0;
let sMin = 0;
let sHour = 0;
var start ,p;
pauseBtn.addEventListener("click",()=>{
  clearInterval(start);
  p=true;
})
stopBtn.addEventListener("click",()=>{
  
  clearInterval(start);
  SWmin.classList.add('hide');
  SWhour.classList.add('hide');
  p=true;
  sMilisec = 0;
  sSec = 0;
  sMin = 0;
  sHour = 0;
  SWmilisec.innerHTML="00";
  SWsec.innerHTML="00";
  SWmin.innerHTML="00";
  SWhour.innerHTML="00";

})

startBtn.addEventListener("click",()=>{
  if(!start || p==true ){
    p=false;
    start=  setInterval(engineOfStopWatch , 10);
  }
} );



const engineOfStopWatch=()=>{
SWmilisec.innerHTML = sMilisec < 10 ? "0" + sMilisec : sMilisec;
sMilisec++;
if (sMilisec >99) {
  sMilisec = 0;
  sSec++;
  SWsec.innerHTML = sSec < 10 ? "0" + sSec : sSec;
  if (sSec >= 59) {
    SWmin.classList.remove('hide');
    sSec = 0;
    sMin++;
    SWmin.innerHTML = sMin < 10 ? "0" + sMin : sMin;
    if (sMin >= 59) {
      SWhour.classList.remove('hide');
      sMin = 0;
      sHour++;
      SWhour.innerHTML = sHour < 10 ? "0" + sHour : sHour;
    }
  }
}
}
// timer part  ______________________________________________________

const timerThings = document.querySelector("#timerPage");
const timer = document.querySelector(".timer");
const tInputHour = timerThings.querySelector("#TMRhour");
const tInputMin = timerThings.querySelector("#TMRmin");
const tInputsec = timerThings.querySelector("#TMRsec");
const resetTimer= timerThings.querySelector("#timerReset");
const submitBtn= timerThings.querySelector("#submitBtn");
const timerDisplay = timerThings.querySelector(".timerDisplay");
const timerBox=timerThings.getElementsByClassName('timerBox');
const timerArrowRapper = document.querySelectorAll(".timerArrowRapper");

let check=true;
let remainingTimeInSec,remainings;
timerArrowRapper.forEach((num) => {
  const numInput = num.querySelector(".timerBox");
  const arrup = num.querySelector(".up");
  const arrdown = num.querySelector(".down");
  arrup.addEventListener("click", () => {
    numInput.stepUp();
    checkMaxMin();
  });
  arrdown.addEventListener("click", () => {
    numInput.stepDown();
    checkMaxMin();
  });
});
function startTimer(){
  if(check==true ){
    check=false;
  let timerHour=parseInt(tInputHour.value,10);
  let timerMin=parseInt(tInputMin.value,10);
  let timerSec=parseInt(tInputsec.value,10);
  let totalTimeInSec=timerHour*3600+timerMin*60+timerSec;

  if (remainingTimeInSec) {
    totalTimeInSec = remainingTimeInSec;
    remainingTimeInSec = undefined; 
  }
countdown = setInterval(function () {
  timerDisplay.classList.remove("hide");
  timer.classList.add("hide");
  const hours = Math.floor(totalTimeInSec / 3600);
  const minutes = Math.floor((totalTimeInSec % 3600) / 60);
  const seconds = totalTimeInSec % 60;

timerDisplay.innerHTML = `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;

  if (totalTimeInSec <= 0) {
    clearInterval(countdown);
    timerDisplay.innerHTML = "Time's up!";
  timesUp();
  }
remainings=totalTimeInSec-1;
  totalTimeInSec--;
}, 1000);
}}
function endTimer() {
  clearInterval(countdown);
  tInputHour.value = 0;
  tInputMin.value = 0;
  tInputsec.value = 0;
  timer.classList.remove("hide");
  timerDisplay.classList.add("hide");
  check=true;
}
function pauseTimer(){
  clearInterval(countdown);
remainingTimeInSec=remainings;
  check=true;
}
function timesUp(){
  timerBox.classList.add("hide");
  
}