const weightliftingSchedule = {
  Monday: [
    ["16:30", "Class"],
    ["19:30", "Class End"]
  ],
  Tuesday: [
    ["16:30", "Class"],
    ["19:30", "Class End"]
  ],
  Wednesday: [
    ["15:31", "Class"],
    ["15:33", "Class End"]
  ],
  Thursday: [
    ["17:30", "Class"],
    ["19:30", "Class End"]
  ],
  Sunday: [
    ["23:00", "Class"],
    ["23:30", "Class End"]
  ]
};

const powerliftingSchedule = {
  Monday: [
    ["17:45", "Class"],
    ["18:45", "Class End"]
  ],
  Tuesday: [
    ["17:45", "Class"],
    ["18:45", "Class End"]
  ],
  Wednesday: [
    ["15:31", "Class"],
    ["15:33", "Class End"]
  ],
  Thursday: [
    ["17:45", "Class"],
    ["18:45", "Class End"]
  ]
};
// Global variables
const clock = document.querySelector(".dom-time");
const weightSign = document.querySelector(".weight-sign");
const powerSign = document.querySelector(".power-sign");
let weekday;
let weightlifting;
let powerlifting;
const power = "power";
const weight = "weight";
let animationWeight = true;
let animationPower = true;

// Animation active
const animationActive = (sign, type) => {
  sign.classList.add(`${type}-active-class`);
  setTimeout(() => {
    sign.textContent = "Class";
    sign.style.background = "#59CD64";
    sign.classList.remove(`${type}-active-class`);
  }, 200);
};

// Animation deactivate
const animationDeactivate = (sign, type) => {
  sign.classList.add(`${type}-active-class`);
  setTimeout(() => {
    sign.textContent = "No Class";
    sign.style.background = "#d75252";
    sign.classList.remove(`${type}-active-class`);
  }, 200);
};

// DOM
const showClassTimes = () => {
  if (weightlifting != undefined) {
    document.querySelector(".weight-DOM-text").innerHTML = `Class between <br>
       ${weightlifting[0][0]} - ${weightlifting[1][0]}`;
  }
  if (powerlifting != undefined) {
    document.querySelector(".power-DOM-text").innerHTML = `Class between <br>
       ${powerlifting[0][0]} - ${powerlifting[1][0]}`;
  }
  if (weightlifting == undefined) {
    document.querySelector(".weight-DOM-text").innerHTML = `No classes today`;
  }
  if (powerlifting == undefined) {
    document.querySelector(".power-DOM-text").innerHTML = `No classes today`;
  }
};

setInterval(() => {
  let currentTime = moment().format("HH:mm");
  weekday = moment.weekdays(moment().day());
  weightlifting = weightliftingSchedule[weekday];
  powerlifting = powerliftingSchedule[weekday];

  // Class hours  weightlifting side
  if (weightlifting != undefined) {
    if (weightlifting[0][0] == currentTime && animationWeight) {
      animationActive(weightSign, weight);
      animationWeight = false;
    } else if (weightlifting[1][0] == currentTime && animationWeight) {
      animationDeactivate(weightSign, weight);
      animationWeight = false;
    } else if (
      weightlifting[0][0] != currentTime &&
      weightlifting[1][0] != currentTime
    ) {
      animationWeight = true;
    }
  }

  // Class hours powerlifting side
  if (powerlifting != undefined) {
    if (powerlifting[0][0] == currentTime && animationPower) {
      animationActive(powerSign, power);
      animationPower = false;
    } else if (powerlifting[1][0] == currentTime && animationPower) {
      animationDeactivate(powerSign, power);
      animationPower = false;
    } else if (
      powerlifting[0][0] != currentTime &&
      powerlifting[1][0] != currentTime
    ) {
      animationPower = true;
    }
  }

  clock.innerHTML = currentTime;
  showClassTimes();
}, 1000);
