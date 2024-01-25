   // Set the countdown date to January 26, 2024 at 16:00:00
   var countDownDate = new Date("Jan 26, 2024 16:00:00").getTime();

   // Update the countdown timer every second
   var x = setInterval(function() {
     // Get the current date and time
     var now = new Date().getTime();
  
     // Calculate the remaining time in milliseconds
     var distance = countDownDate - now;
  
     // Calculate the remaining time in days, hours, minutes, and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
     // Update the HTML element with the id "header-text" to display the remaining time
     document.getElementById("header-text").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
     // Check if the countdown has reached zero
     if (distance < 0) {
       // Clear the interval and display the message "Over datum"
       clearInterval(x);
       document.getElementById("header-text").innerHTML = "Over datum";
     }
   }, 1000);

   var id = setInterval(frame, 5);

   
