function addTimer() {
  document.getElementById("stopwatch").style.display = "flex";
  document.getElementById("button").style.display = "block";
}

const timer = document.getElementById("stopwatch");
var hr="00";
var min="00";
var sec="00";
var timerValue=true;

function start(){
  if(timerValue===true){
    timerValue=false;
    timerCycle();
    return
  }

}
function stop(){
  if(timerValue===false) {
    timerValue=true;
    return
  }
}

function timerCycle(){

  if(timerValue===false) {
    sec=parseInt(sec);
    //console.log(sec)
    min=parseInt(min);
    hr=parseInt(hr);

    sec=sec+1;

    if(sec===60){
      min=min+1;
      sec=00;
    }
    if(min===60){
      hr=hr+1;
      min=00;
      sec=00;
    }

    if(sec<10||sec===0) {
      sec="0"+sec;
    }
    if(min<10||min==0) {
      min="0"+min;
    }
    if(hr<10||hr===0) {
      hr="0"+hr;
    }

    if(sec>10){
        document.getElementById("hour").innerHTML=hr+":"
        document.getElementById("minute").innerHTML=min+":"
        document.getElementById("second").innerHTML=sec
        document.getElementById("second").style.color="red"
    }

    document.getElementById("hour").innerHTML=hr+":"
    document.getElementById("minute").innerHTML=min+":"
    document.getElementById("second").innerHTML=sec
    

    setTimeout("timerCycle()",1000);
    return
  }
}

function reset(){
    hr="00"
    min="00"
    sec="00"
    document.getElementById("hour").innerHTML=hr+":"
    document.getElementById("minute").innerHTML=min+":"
    document.getElementById("second").innerHTML=sec
    document.getElementById("second").style.color="blueviolet"
    stop()
}
