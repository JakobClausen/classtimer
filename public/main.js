const schedule = [
  [
    [moment({ hour: 09, minute: 30 }), "Class", true],
    [moment({ hour: 10, minute: 30 }), "Class"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Class", true],
    [moment({ hour: 07, minute: 45 }), "Class end"],
    [moment({ hour: 12, minute: 00 }), "Class", true],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 16, minute: 00 }), "Class", true],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Class", true],
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Class", true],
    [moment({ hour: 18, minute: 25 }), "Break"],
    [moment({ hour: 18, minute: 30 }), "Class", true],
    [moment({ hour: 19, minute: 15 }), "Break"],
    [moment({ hour: 19, minute: 20 }), "Class", true],
    [moment({ hour: 20, minute: 05 }), "Class end"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Class", true],
    [moment({ hour: 07, minute: 45 }), "Class end"],
    [moment({ hour: 12, minute: 00 }), "Class", true],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 16, minute: 00 }), "Class", true],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Class", true],
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Class", true],
    [moment({ hour: 18, minute: 25 }), "Break"],
    [moment({ hour: 18, minute: 30 }), "Class", true],
    [moment({ hour: 19, minute: 15 }), "Break"],
    [moment({ hour: 19, minute: 20 }), "Class", true],
    [moment({ hour: 20, minute: 20 }), "Class end"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Class", true],
    [moment({ hour: 07, minute: 45 }), "Class end"],
    [moment({ hour: 12, minute: 00 }), "Class", true],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 16, minute: 00 }), "Class", true],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Class", true],
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Class", true],
    [moment({ hour: 18, minute: 25 }), "Break"],
    [moment({ hour: 18, minute: 30 }), "Class", true],
    [moment({ hour: 19, minute: 15 }), "Break"],
    [moment({ hour: 19, minute: 20 }), "Class", true],
    [moment({ hour: 20, minute: 20 }), "Class end"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Class", true],
    [moment({ hour: 07, minute: 45 }), "Class end"],
    [moment({ hour: 12, minute: 00 }), "Class", true],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 16, minute: 00 }), "Class", true],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Class", true],
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Class", true],
    [moment({ hour: 18, minute: 25 }), "Break"],
    [moment({ hour: 18, minute: 30 }), "Class", true],
    [moment({ hour: 19, minute: 15 }), "Break"],
    [moment({ hour: 19, minute: 20 }), "Class", true],
    [moment({ hour: 20, minute: 05 }), "Class end"]
  ],
  [
    [moment({ hour: 07, minute: 00 }), "Class", true],
    [moment({ hour: 07, minute: 45 }), "Class end"],
    [moment({ hour: 12, minute: 00 }), "Class", true],
    [moment({ hour: 12, minute: 45 }), "Class end"],
    [moment({ hour: 16, minute: 00 }), "Class", true],
    [moment({ hour: 16, minute: 45 }), "Break"],
    [moment({ hour: 16, minute: 50 }), "Class", true],
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Class", true],
    [moment({ hour: 18, minute: 25 }), "Class end"]
  ],
  [
    [moment({ hour: 10, minute: 00 }), "Class", true],
    [moment({ hour: 11, minute: 00 }), "Class end"],
    [moment({ hour: 12, minute: 00 }), "Break", true],
    [moment({ hour: 12, minute: 15 }), "Class"],
    [moment({ hour: 13, minute: 15 }), "Class end"]
  ]
];

(() => {
  let arrayOfFutureClasses;
  let scheduleHours;
  let scheduleCountdownTime;
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
      arrayOfFutureClasses = schedule[weekDayIndex].filter(x => {
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

      // DOM
      if (arrayOfFutureClasses[0][2]) {
        document.querySelector("p").style.visibility = "unset";
      } else {
        document.querySelector("p").style.visibility = "hidden";
      }
    }

    if (scheduleHours === "00" && isClasses) {
      document.querySelector(".dom-time").textContent = scheduleCountdownTime;
    } else {
      document.querySelector(".dom-time").textContent = currentTime;
      document.querySelector("p").style.visibility = "hidden";
    }

    if (moment().format("HH:mm:ss") === "03:00:00") {
      location.reload();
    }
  }, 1000);
})();
