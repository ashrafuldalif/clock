
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
  DATE = addZero(month) + " : " + year;
  DATE = addZero(date) + " : " + DATE;
  // hour.innerHTML = h < 10 ? "0" + h : h;
  hour.innerHTML = addZero(h);
  // min.innerHTML = m < 10 ? "0" + m : m;
  min.innerHTML = addZero(m);
  // sec.innerHTML = s < 10 ? "0" + s : s;
  sec.innerHTML = addZero(s);
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
function addZero(num){
  newNum= num <10 ? "0" + num : num;
  return newNum;
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
const timerBtns=timerThings.querySelectorAll(".timerBtn");
const timerBox=timerThings.getElementsByClassName('timerBox');
const timerArrowRapper = document.querySelectorAll(".timerArrowRapper");
const stopRinging = document.querySelector(".stopRinging");

let keyDownU,keyDownD;
let check=true
let remainingTimeInSec,remainings;

timerArrowRapper.forEach((num) => {
let numInput = num.querySelector(".timerBox");
let arrup = num.querySelector(".up");
let arrdown = num.querySelector(".down");

let isclicking = false;
arrup.addEventListener("mousedown", () => {
  if(keyDownD||keyDownU){
    clearInterval(keyDownD);
    clearInterval(keyDownU);
  }
  isclicking = true;
  if (isclicking) {
    keyDownU = setInterval(() => {
      numInput.stepUp();
      if (numInput.value == numInput.max ) {
        clearInterval(keyDownU);
          numInput.value = numInput.min;

      }
        numInput.value = addZero(numInput.value);
    }, 100);
  }
});
arrup.addEventListener("mouseup", () => {
  isclicking = false;
  clearInterval(keyDownU);
});

arrdown.addEventListener("mousedown", () => {
  if(keyDownD||keyDownU){
    clearInterval(keyDownD);
    clearInterval(keyDownU);
  }
  isclicking = true;
  if (isclicking) {
    keyDownD = setInterval(() => {
      numInput.stepDown();
      if (numInput.value == numInput.min) {
        clearInterval(keyDownD);
          numInput.value = numInput.max;

      }
        numInput.value = addZero(numInput.value);
    }, 100);
  }
  
});
arrdown.addEventListener("mouseup", () => {
  isclicking = false;
  clearInterval(keyDownD);
});
});
function startTimer(){
    if (keyDownD || keyDownU) {
      clearInterval(keyDownD);
      clearInterval(keyDownU);
    }
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
    if (keyDownD || keyDownU) {
      clearInterval(keyDownD);
      clearInterval(keyDownU);
    }
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
let playTheAudio;
let timerRing=new Audio("timer_tune.mp3");
function timesUp(){
for(let i=0 ;i<3;i++){
  timerBtns[i].classList.add("hide");
}
stopRinging.classList.remove("hide");
playTheAudio=setInterval(() => {
  timerRing.play();
}, 10);

}
stopRinging.addEventListener("click",e=>{
for(let i=0 ;i<3;i++){
  timerBtns[i].classList.remove("hide");
}
stopRinging.classList.add("hide");
timerRing.pause();
clearInterval(playTheAudio);
timerRing.currentTime=0;
endTimer();
})

const alarmThings = document.querySelector("#alarmPage");
const alarmArrowRapper = alarmThings.querySelectorAll(".alarmArrowRapper");
const aHour = alarmThings.querySelector("#alarmHour");
const aMin = alarmThings.querySelector("#alarmMin");
const aSec = alarmThings.querySelector("#alarmSec");
const alarmAmPm = alarmThings.querySelector("#alarmAmPm");
const alarmSetBtn = alarmThings.querySelector(".alarmSetBtn");
const alarmWeekBtns = alarmThings.querySelectorAll(".AweekBox");
const sayTheDays = alarmThings.querySelector(".sayTheDays");
const everyDay = alarmThings.querySelector(".everyDay");
console.log(everyDay);
alarmArrowRapper.forEach((num) => {
  let numInput = num.querySelector(".alarmInputBox");
  let arrup = num.querySelector(".up");
  let arrdown = num.querySelector(".down");

  let isclicking = false;
  arrup.addEventListener("mousedown", () => {
    isclicking = true;
    if (keyDownD || keyDownU) {
      clearInterval(keyDownD);
      clearInterval(keyDownU);
    }
  

      if (isclicking) {
      keyDownU = setInterval(() => {
        numInput.stepUp();
        if (
          numInput.value == numInput.max) {
          clearInterval(keyDownU);
          numInput.value=numInput.min;
        }
        numInput.value=addZero(numInput.value);
      }, 100);
    }
  });
  arrup.addEventListener("mouseup", () => {
    isclicking = false;
    clearInterval(keyDownU);
  });

  arrdown.addEventListener("mousedown", () => {
    isclicking = true;
    if (keyDownD || keyDownU) {
      clearInterval(keyDownD);
      clearInterval(keyDownU);
    }
    if (isclicking) {

      keyDownD = setInterval(() => {
        numInput.stepDown();
        if (numInput.value == numInput.min) {
          clearInterval(keyDownD);  
          numInput.value=numInput.max;

        }
        numInput.value=addZero(numInput.value)
      }, 100);
    }
  });
  arrdown.addEventListener("mouseup", () => {
    isclicking = false;
    clearInterval(keyDownD);
  });
});


alarmSetBtn.addEventListener("click",()=>{
  let h=parseInt(aHour.value);
  let m=parseInt(aMin.value);
  let s=parseInt(aSec.value);
  let ampm=parseInt(alarmAmPm.value);

  console.log(`${h} : ${m} : ${s} : ${ampm} `);
})


function changeAmPm(data) {
  var currentOptionIndex = alarmAmPm.selectedIndex;

  // Calculate the new index after the change
  var newOptionIndex =(currentOptionIndex + data + alarmAmPm.options.length) % alarmAmPm.options.length;

  // Update the selected option
  alarmAmPm.selectedIndex = newOptionIndex;
}

let checkingWeekDays = [ false, false, false, false, false, false, false];

for (let i = 0; i < 7; i++) {
  alarmWeekBtns[i].addEventListener("click", (e) => {
    show='';
    if (!checkingWeekDays[i]) {
      checkingWeekDays[i] = true;
      e.target.classList.add("selected");
    } else {
      checkingWeekDays[i] = false;
      e.target.classList.remove("selected");
    }
    sureTheDays(checkingWeekDays);
  });
}



let tempForeveryDay=false;
everyDay.addEventListener("click",e=>{
  console.log("clicked");
  if(!tempForeveryDay){
    console.log("if");
    checkingWeekDays = [true, true, true, true, true, true, true];
    tempForeveryDay = true;
    e.target.classList.add("selected")
    selectingByAllKey(true)
    
  }
  else{
    console.log("else");
    checkingWeekDays = [false, false, false, false, false, false, false];
    tempForeveryDay = false;
    e.target.classList.remove("selected")
    selectingByAllKey(false);
  }
  sureTheDays(checkingWeekDays);

})
function selectingByAllKey(bool){
  if(bool){
    for (i=0;i<7;i++){
      alarmWeekBtns[i].classList.add("selected");
    }
  }
  else {
      for (i=0;i<7;i++){
    alarmWeekBtns[i].classList.remove("selected");
  }}
}










let days =new Set (),temp=[],x=0;
function sureTheDays(e){
for(i=0;i<7;i++){
  if(e[i]){
    temp[x]=daysOfTheWeek[i];
    days.add(temp[x]);
  }
  else{
    days.delete(daysOfTheWeek[i]);
  }
}
howManyDay([...days]);
}
function howManyDay(sure){
  console.log(sure.length)
if(sure.length>=7)
{sure="Every Day";
everyDay.classList.add("selected");
tempForeveryDay=true;
}
else if (sure.length==0){
  sure="Single Day";
}
else{
  everyDay.classList.remove("selected");
  tempForeveryDay=false;

}
sayTheDays.innerHTML=sure;
}




