
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

let alltime = document.querySelector(".clock");
let hour = alltime.querySelector("#hour");
let min = alltime.querySelector("#min");
let sec = alltime.querySelector("#sec");
let day = alltime.querySelector("#day");
let allday = document.querySelector(".dateBox");
let wday = allday.querySelector("#weekDay");
let tarikh = allday.querySelector("#date");
let links = document.querySelectorAll("nav a");
let sections = document.querySelectorAll("section");


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

let stopWatchThings = document.querySelector("#stopWatchPage");
let SWmilisec = stopWatchThings.querySelector("#swMiliSec");
let SWsec = stopWatchThings.querySelector("#swsec");
let SWmin = stopWatchThings.querySelector("#swmin");
let SWhour = stopWatchThings.querySelector("#swhour");
let stopBtn = stopWatchThings.querySelector("#stopBtn");
let pauseBtn = stopWatchThings.querySelector("#pauseBtn");
let startBtn = stopWatchThings.querySelector("#startBtn");

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
