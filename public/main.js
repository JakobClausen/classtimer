const schedule = [
  [
    [moment({ hour: 09, minute: 30 }), "Fanny"],
    [moment({ hour: 10, minute: 30 }), "Fanny"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Quintin"],
    [moment({ hour: 07, minute: 45 }), "Countdown end"],
    [moment({ hour: 12, minute: 00 }), "Quintin"],
    [moment({ hour: 12, minute: 45 }), "Countdown end"],
    [moment({ hour: 16, minute: 00 }), "Emil"],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Emil"],
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Henrik"],
    [moment({ hour: 18, minute: 25 }), "Break"],
    [moment({ hour: 18, minute: 30 }), "Henrik"],
    [moment({ hour: 19, minute: 15 }), "Break"],
    [moment({ hour: 19, minute: 20 }), "Henrik"],
    [moment({ hour: 20, minute: 05 }), "Countdown end"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Quintin"],
    [moment({ hour: 07, minute: 45 }), "Countdown end"],
    [moment({ hour: 12, minute: 00 }), "Quintin"],
    [moment({ hour: 12, minute: 45 }), "Countdown end"],
    [moment({ hour: 16, minute: 00 }), "Quintin"],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Benjamin"],
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Jakob"],
    [moment({ hour: 18, minute: 25 }), "Break"],
    [moment({ hour: 18, minute: 30 }), "Jakob"],
    [moment({ hour: 19, minute: 15 }), "Break"],
    [moment({ hour: 19, minute: 20 }), "Felix"],
    [moment({ hour: 20, minute: 20 }), "Countdown end"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Quintin"],
    [moment({ hour: 07, minute: 45 }), "Countdown end"],
    [moment({ hour: 12, minute: 00 }), "Quintin"],
    [moment({ hour: 12, minute: 45 }), "Countdown end"],
    [moment({ hour: 16, minute: 00 }), "Henrik"],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Henrik"],
    [moment({ hour: 16, minute: 40 }), "Emil"],
    [moment({ hour: 16, minute: 25 }), "Break"],
    [moment({ hour: 16, minute: 30 }), "Emil"],
    [moment({ hour: 16, minute: 15 }), "Break"],
    [moment({ hour: 16, minute: 20 }), "Felix"],
    [moment({ hour: 27, minute: 20 }), "Countdown end"],
    [moment({ hour: 16, minute: 37 }), "Break"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Quintin"],
    [moment({ hour: 07, minute: 45 }), "Countdown end"],
    [moment({ hour: 12, minute: 00 }), "Fanny"],
    [moment({ hour: 12, minute: 45 }), "Countdown end"],
    [moment({ hour: 16, minute: 00 }), "Fanny"],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Fanny"],
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Fanny"],
    [moment({ hour: 18, minute: 25 }), "Break"],
    [moment({ hour: 18, minute: 30 }), "Quintin"],
    [moment({ hour: 19, minute: 15 }), "Break"],
    [moment({ hour: 19, minute: 20 }), "Quintin"],
    [moment({ hour: 20, minute: 05 }), "Countdown end"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Andreas"],
    [moment({ hour: 07, minute: 45 }), "Countdown end"],
    [moment({ hour: 12, minute: 00 }), "Andreas"],
    [moment({ hour: 12, minute: 45 }), "Countdown end"],
    [moment({ hour: 16, minute: 00 }), "Henrik"],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Henrik"],
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Henrik"],
    [moment({ hour: 18, minute: 25 }), "Countdown end"]
  ],
  [
    [moment({ hour: 10, minute: 00 }), "Andreas"],
    [moment({ hour: 11, minute: 00 }), "Countdown end"],
    [moment({ hour: 12, minute: 15 }), "Andreas"],
    [moment({ hour: 13, minute: 15 }), "Countdown end"]
  ]
];
//Global variables
let currentTime;
let arrayOfFutureClasses;
let weekDayIndex;
let scheduleCountdownTime;
let scheduleHours;

// Gets the current index of weekday
(() => {
  setInterval(() => {
    weekDayIndex = moment().day();
  }, 1000);
})();

// Returns an array of future classes this day
(() => {
  setInterval(() => {
    arrayOfFutureClasses = schedule[weekDayIndex].filter(x => {
      if (x[0].format("HH:mm") > currentTime) {
        return (arrayOfFutureClasses = x[0]);
      }
    });
  }, 500);
})();

//Counts down the times in array
const scheduleCountdown = () => {
  setInterval(() => {
    let now = new Date().getTime();
    distance = arrayOfFutureClasses[0][0].format("x") - now;

    scheduleHours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    // +1 = (1 minute left = 59 sec and down)
    let scheduleMinutes =
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + 1;

    if (scheduleHours < 10) {
      scheduleHours = "0" + scheduleHours;
    }

    if (scheduleMinutes < 10) {
      scheduleMinutes = "0" + scheduleMinutes;
    }

    scheduleCountdownTime = scheduleHours + ":" + scheduleMinutes;

    if (scheduleCountdownTime === "0-1:00") {
      scheduleCountdownTime = "00:00";
    }
  }, 500);
};
scheduleCountdown();

const domTime = () => {
  setInterval(() => {
    if (scheduleHours === "00") {
      document.querySelector(".dom-time").textContent = scheduleCountdownTime;
    } else if (arrayOfFutureClasses.length === 0) {
      document.querySelector(".dom-time").textContent = currentTime;
    } else {
      document.querySelector(".dom-time").textContent = currentTime;
    }
  }, 1000);
};
domTime();

// Clock
(() => {
  setInterval(() => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    currentTime = hours + ":" + minutes;
  }, 1000);
})();
