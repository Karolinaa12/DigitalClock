const clock = document.querySelector("#digitalClock");

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  clock.innerHTML = `${h}:${m}:${s}`;
  setTimeout(showTime, 1000);
}

showTime();
