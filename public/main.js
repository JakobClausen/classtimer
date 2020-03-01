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
    [moment({ hour: 17, minute: 35 }), "Break"],
    [moment({ hour: 17, minute: 40 }), "Emil"],
    [moment({ hour: 18, minute: 25 }), "Break"],
    [moment({ hour: 18, minute: 30 }), "Emil"],
    [moment({ hour: 19, minute: 15 }), "Break"],
    [moment({ hour: 19, minute: 20 }), "Felix"],
    [moment({ hour: 20, minute: 20 }), "Countdown end"]
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

(() => {
  setInterval(() => {
    let arrayOfFutureClasses;
    let scheduleHours;
    let scheduleCountdownTime;
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
    }
    // DOM
    if (scheduleHours === "00" && isClasses) {
      document.querySelector(".dom-time").textContent = scheduleCountdownTime;
    } else {
      document.querySelector(".dom-time").textContent = currentTime;
    }
  }, 1000);
})();
