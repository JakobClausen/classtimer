const schedule = [
  [
    [moment({ hour: 09, minute: 30 }), "Class"],
    [moment({ hour: 10, minute: 30 }), "break"],
    [moment({ hour: 10, minute: 31 }), "Class"],
    [moment({ hour: 10, minute: 30 }), "Class end"],
  ],
  [
    [moment({ hour: 12, minute: 00 }), "Class"],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 17, minute: 00 }), "Class"],
    [moment({ hour: 17, minute: 45 }), "Break"],
    [moment({ hour: 17, minute: 50 }), "Class"],
    [moment({ hour: 18, minute: 35 }), "Class end"],
  ],
  [
    [moment({ hour: 12, minute: 00 }), "Class"],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 17, minute: 00 }), "Class"],
    [moment({ hour: 17, minute: 45 }), "Break"],
    [moment({ hour: 17, minute: 50 }), "Class"],
    [moment({ hour: 18, minute: 35 }), "Class end"],
  ],
  [
    [moment({ hour: 12, minute: 00 }), "Class"],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 17, minute: 00 }), "Class"],
    [moment({ hour: 17, minute: 45 }), "Break"],
    [moment({ hour: 17, minute: 50 }), "Class"],
    [moment({ hour: 18, minute: 35 }), "Class end"],
  ],
  [
    [moment({ hour: 12, minute: 00 }), "Class"],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 17, minute: 00 }), "Class"],
    [moment({ hour: 17, minute: 45 }), "Break"],
    [moment({ hour: 17, minute: 50 }), "Class"],
    [moment({ hour: 18, minute: 35 }), "Class end"],
  ],
  [
    [moment({ hour: 12, minute: 00 }), "Class"],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 17, minute: 00 }), "Class"],
    [moment({ hour: 17, minute: 45 }), "Break"],
    [moment({ hour: 17, minute: 50 }), "Class"],
    [moment({ hour: 18, minute: 35 }), "Class end"],
  ],
  [
    [moment({ hour: 10, minute: 00 }), "Class"],
    [moment({ hour: 11, minute: 00 }), "break"],
    [moment({ hour: 11, minute: 01 }), "Class"],
    [moment({ hour: 12, minute: 00 }), "Class end"],
  ],
];

(() => {
  let arrayOfFutureClasses;
  let scheduleHours;
  let scheduleMinutes;
  setInterval(() => {
    let currentTime = moment().format("HH:mm");
    let weekDayIndex = moment().day();
    // Bool
    let isClasses =
      schedule[weekDayIndex][schedule[weekDayIndex].length - 1][0].format(
        "HH:mm"
      ) > currentTime;

    // checks if last class for the day is over
    if (isClasses) {
      // makes a new array of future classes
      arrayOfFutureClasses = schedule[weekDayIndex].filter((x) => {
        if (x[0].format("HH:mm") > currentTime) {
          return (arrayOfFutureClasses = x[0]);
        }
      });

      // Countdown timer
      let distance =
        arrayOfFutureClasses[0][0].format("x") - moment().format("x");

      scheduleHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      scheduleMinutes =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + 1;

      if (scheduleHours < 10) {
        scheduleHours = "0" + scheduleHours;
      }

      // DOM (timer text)
      if (arrayOfFutureClasses[0][1] === "Class") {
        document.querySelector(".timer-text").textContent =
          "Next class starts in:";
      } else if (
        arrayOfFutureClasses[0][1] === "Class end" ||
        arrayOfFutureClasses[0][1] === "Break"
      ) {
        document.querySelector(".timer-text").textContent = "Crossfit class";
      }
    }

    // DOM (clock)
    if (scheduleHours === "00" && isClasses) {
      document.querySelector(".dom-time").textContent = scheduleMinutes;
      document.querySelector(".minutes").style.display = "unset";
      document.querySelector(".side-clock").textContent = currentTime;
    } else {
      document.querySelector(".dom-time").textContent = currentTime;
      document.querySelector(".timer-text").style.visibility = "hidden";
      document.querySelector(".minutes").style.display = "none";
      document.querySelector(".side-clock").textContent = "";
    }

    // Reloads the page to get todays dates
    if (moment().format("HH:mm:ss") === "03:00:00") {
      location.reload();
    }
  }, 1000);
})();
