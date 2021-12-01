
function digitalClock() {
  let date = new Date();
 let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormet = "AM";
  let month = (date.getMonth()+1);
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  
  let day = weekday[date.getDay()];
  

  if(hours === 0){
    hours = 12;
  }
  if(hours >= 12){
    
    hours = hours - 12;
    timeFormet = "PM";
  }

  
   minutes = minutes <10 ? "0" + minutes : minutes;
   seconds = seconds <10 ? "0" + seconds : seconds;

    let finalTime = hours + ":" + minutes + ":" + seconds+ " " + timeFormet;
  
let finalDate = date.getDate() + "-" + month + "-" + date.getFullYear() + " ," + " "+day;

let finalDay = 
  document.getElementById("time").innerHTML= finalTime;
 
  document.getElementById("month").innerHTML= finalDate,day;
 
  setInterval(digitalClock, 1000);
}
digitalClock();