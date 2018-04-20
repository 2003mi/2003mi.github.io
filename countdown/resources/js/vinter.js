// Set the date we're counting down to
var countDownDatev = new Date("Feb 23, 2018 14:10:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDatev - now;

  // Time calculations for days, hours, minutes and seconds
  var daysv = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hoursv = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesv = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secondsv = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="vinter"
  document.getElementById("vinter").innerHTML = daysv + "d " + hoursv + "h "
  + minutesv + "m " + secondsv + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("vinter").innerHTML = "EXPIRED";
  }
}, 100);