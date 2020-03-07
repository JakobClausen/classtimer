const clock = document.querySelector(".dom-time");

setInterval(() => {
  clock.innerHTML = moment().format("HH:mm");
}, 1000);
