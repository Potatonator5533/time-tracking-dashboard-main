let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");

let workCurrentHrsInfo = document.getElementById("workCurrentHrsInfo");
let playCurrentHrsInfo = document.getElementById("playCurrentHrsInfo");
let studyCurrentHrsInfo = document.getElementById("studyCurrentHrsInfo");
let exerciseCurrentHrsInfo = document.getElementById("exerciseCurrentHrsInfo");
let socialCurrentHrsInfo = document.getElementById("socialCurrentHrsInfo");
let selfCareCurrentHrsInfo = document.getElementById("selfCareCurrentHrsInfo");

let workPrevHrsInfo = document.getElementById("workPrevHrsInfo");
let playPrevHrsInfo = document.getElementById("playPrevHrsInfo");
let studyPrevHrsInfo = document.getElementById("studyPrevHrsInfo");
let exercisePrevHrsInfo = document.getElementById("exercisePrevHrsInfo");
let socialPrevHrsInfo = document.getElementById("socialPrevHrsInfo");
let selfCarePrevHrsInfo = document.getElementById("selfCarePrevHrsInfo");

let currentlySet = "daily";
Displayinfo();

dailyBtn.addEventListener("click", () => {
  currentlySet = "daily";
  Displayinfo();
});

weeklyBtn.addEventListener("click", () => {
  currentlySet = "weekly";
  Displayinfo();
});

monthlyBtn.addEventListener("click", () => {
  currentlySet = "monthly";
  Displayinfo();
});

function Displayinfo() {
  if (currentlySet == "daily") {
    workCurrentHrsInfo.innerText = "5hrs";
    workPrevHrsInfo.innerText = "Yesterday - 7hrs";
    playCurrentHrsInfo.innerText = "1hr";
    playPrevHrsInfo.innerText = "Yesterday - 2hrs";
    studyCurrentHrsInfo.innerText = "0hrs";
    studyPrevHrsInfo.innerText = "Yesterday - 1hr";
    exerciseCurrentHrsInfo.innerText = "1hr";
    exercisePrevHrsInfo.innerText = "Yesterday - 1hr";
    socialCurrentHrsInfo.innerText = "1hr";
    socialPrevHrsInfo.innerText = "Yesterday - 3hrs";
    selfCareCurrentHrsInfo.innerText = "0hrs";
    selfCarePrevHrsInfo.innerText = "Yesterday - 1hr";
    dailyBtn.className = "rubik-regular2 selected";
    weeklyBtn.className = "rubik-regular2";
    monthlyBtn.className = "rubik-regular2";
  } else if (currentlySet == "weekly") {
    workCurrentHrsInfo.innerText = "32hrs";
    workPrevHrsInfo.innerText = "Last Week - 36hrs";
    playCurrentHrsInfo.innerText = "10hrs";
    playPrevHrsInfo.innerText = "Last Week - 8hrs";
    studyCurrentHrsInfo.innerText = "4hrs";
    studyPrevHrsInfo.innerText = "Last Week - 7hrs";
    exerciseCurrentHrsInfo.innerText = "4hrs";
    exercisePrevHrsInfo.innerText = "Last Week - 5hrs";
    socialCurrentHrsInfo.innerText = "5hrs";
    socialPrevHrsInfo.innerText = "Last Week - 10hrs";
    selfCareCurrentHrsInfo.innerText = "2hrs";
    selfCarePrevHrsInfo.innerText = "Last Week - 2hrs";
    dailyBtn.className = "rubik-regular2";
    weeklyBtn.className = "rubik-regular2 selected";
    monthlyBtn.className = "rubik-regular2";
  } else {
    workCurrentHrsInfo.innerText = "103hrs";
    workPrevHrsInfo.innerText = "Last Month - 128hrs";
    playCurrentHrsInfo.innerText = "23hrs";
    playPrevHrsInfo.innerText = "Last Month - 29hrs";
    studyCurrentHrsInfo.innerText = "13hrs";
    studyPrevHrsInfo.innerText = "Last Month - 19hrs";
    exerciseCurrentHrsInfo.innerText = "11hrs";
    exercisePrevHrsInfo.innerText = "Last Month - 18hrs";
    socialCurrentHrsInfo.innerText = "21hrs";
    socialPrevHrsInfo.innerText = "Last Month - 23hrs";
    selfCareCurrentHrsInfo.innerText = "7hrs";
    selfCarePrevHrsInfo.innerText = "Last Month - 11hrs";
    dailyBtn.className = "rubik-regular2";
    weeklyBtn.className = "rubik-regular2";
    monthlyBtn.className = "rubik-regular2 selected";
  }
}
