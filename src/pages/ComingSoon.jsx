import React from "react";

import "./comingSoon.css";

export default function ComingSoon() {
  // Set the date we're counting down to
  var countDownDate = new Date("Sept 7, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Find the time remaining between now and the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes and seconds remaining
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
  return (
    <>
      <div class="container">
        <h1>Coming Soon!</h1>
        <p>
          Our website is under construction. We'll be here soon with our new
          awesome site.
        </p>
        <div class="countdown" id="countdown"></div>
      </div>
      <div class="footer">© 2024 YourCompany. All rights reserved.</div>
    </>
  );
}
