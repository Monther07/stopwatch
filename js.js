window.onload = function () {
  var seconds = 00;
  var minutes = 00;
  var hours = 00;
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var appendHours = document.getElementById("hours");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");

  var Interval;

  // function save the history of the stopwatch inside an array

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
  };

  buttonStop.onclick = function () {
    // when we click stop button the numbers of the stopwatch will be saved inside the array
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    // when we click reset button the numbers of the stopwatch will be saved inside the array
    clearInterval(Interval);
    seconds = 00;
    minutes = 00;
    hours = 00;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;

    var lapTable = document.getElementById("lap-table");
    lapTable.innerHTML = ""; //clear the lap table
    lapCounter = 1; //reset the lap counter
  };

  var lapCounter = 1; //keeps track of the lap number

  //function to add a new row to the lap table
  function addLapRow(lapNumber, lapTime) {
    var lapTable = document.getElementById("lap-table");
    var newRow = lapTable.insertRow();
    var lapNumberCell = newRow.insertCell(0);
    var lapTimeCell = newRow.insertCell(1);
    lapNumberCell.innerHTML = lapNumber;
    lapTimeCell.innerHTML = lapTime;
  }

  // when buttlap is clicked the current time will go into if loop to check if the H,M,S is less than 10, the loop will add extra 0 to the current time, if not will add the same value of the current time
  var buttonLap = document.getElementById("button-lap");
  buttonLap.onclick = function () {
    var currentTime = "";
    if (hours < 10) {
      currentTime += "0" + hours + ":";
    } else {
      currentTime += hours + ":";
    }
    if (minutes < 10) {
      currentTime += "0" + minutes + ":";
    } else {
      currentTime += minutes + ":";
    }
    if (seconds < 10) {
      currentTime += "0" + seconds;
    } else {
      currentTime += seconds;
    }
    addLapRow(currentTime, lapCounter);
    lapCounter++;
    return currentTime;
  };

  function startTimer() {
    /***** Tens Process ****/
    seconds++;

    /***** Seconds Process ****/
    if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + seconds;
    }

    // if min > 59 then print in the console Hours String, and change the stopwatch display value to 0 except hour increase by 1
    if (minutes >= 60) {
      console.log("Hours");
      hours = (hours + 1) % 24;
      appendHours.innerHTML = "0" + hours;
      minutes = 0;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + seconds;
    } else {
      if (minutes <= 9) {
        appendMinutes.innerHTML = "0" + minutes;
      } else {
        appendMinutes.innerHTML = minutes;
      }
    }
  }
};
