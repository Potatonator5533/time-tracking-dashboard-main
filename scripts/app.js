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

function GetData() {
  return fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function SortInfoBySetting(i, j, displayCurrent, displayPrevious) {
  if (displayCurrent != 1) {
    displayCurrent += "hrs";
  } else {
    displayCurrent += "hr";
  }
  if (displayPrevious != 1) {
    displayPrevious += "hrs";
  } else {
    displayPrevious += "hr";
  }
  if (j == 0) {
    switch (i) {
      case 0:
        workCurrentHrsInfo.innerText = displayCurrent;
        break;
      case 1:
        playCurrentHrsInfo.innerText = displayCurrent;
        break;
      case 2:
        studyCurrentHrsInfo.innerText = displayCurrent;
        break;
      case 3:
        exerciseCurrentHrsInfo.innerText = displayCurrent;
        break;
      case 4:
        socialCurrentHrsInfo.innerText = displayCurrent;
        break;
      default:
        selfCareCurrentHrsInfo.innerText = displayCurrent;
        break;
    }
  } else {
    switch (i) {
      case 0:
        workPrevHrsInfo.innerText = "Yesterday - " + displayPrevious;
        break;
      case 1:
        playPrevHrsInfo.innerText = "Yesterday - " + displayPrevious;
        break;
      case 2:
        studyPrevHrsInfo.innerText = "Yesterday - " + displayPrevious;
        break;
      case 3:
        exercisePrevHrsInfo.innerText = "Yesterday - " + displayPrevious;
        break;
      case 4:
        socialPrevHrsInfo.innerText = "Yesterday - " + displayPrevious;
        break;
      default:
        selfCarePrevHrsInfo.innerText = "Yesterday - " + displayPrevious;
        break;
    }
  }
}

function Displayinfo() {
  GetData().then((data) => {
    if (currentlySet == "daily") {
      for (let i = 0; i <= 5; i++) {
        for (let j = 0; j < 2; j++) {
          let displayCurrent = data[i].timeframes.daily.current;
          let displayPrevious = data[i].timeframes.daily.previous;
          SortInfoBySetting(i, j, displayCurrent, displayPrevious);
        }
      }
      dailyBtn.className = "rubik-regular2 selected";
      weeklyBtn.className = "rubik-regular2";
      monthlyBtn.className = "rubik-regular2";
    } else if (currentlySet == "weekly") {
      for (let i = 0; i <= 5; i++) {
        for (let j = 0; j < 2; j++) {
          let displayCurrent = data[i].timeframes.weekly.current;
          let displayPrevious = data[i].timeframes.weekly.previous;
          SortInfoBySetting(i, j, displayCurrent, displayPrevious);
        }
      }
      dailyBtn.className = "rubik-regular2";
      weeklyBtn.className = "rubik-regular2 selected";
      monthlyBtn.className = "rubik-regular2";
    } else {
      for (let i = 0; i <= 5; i++) {
        for (let j = 0; j < 2; j++) {
          let displayCurrent = data[i].timeframes.monthly.current;
          let displayPrevious = data[i].timeframes.monthly.previous;
          SortInfoBySetting(i, j, displayCurrent, displayPrevious);
        }
      }
      dailyBtn.className = "rubik-regular2";
      weeklyBtn.className = "rubik-regular2";
      monthlyBtn.className = "rubik-regular2 selected";
    }
  });
}
