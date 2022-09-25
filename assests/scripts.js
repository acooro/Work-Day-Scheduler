
//date set up
setInterval(function (){
  $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
},1000)

//store input information
var schedule = {
  hour9: "",
  hour10: "",
  hour11: "",
  hour12: "",
  hour13: "",
  hour14: "",
  hour15: "",
  hour16: "",
  hour17: "",
}



//test changing of colors
function setStart(){
  for (var i=0; i<13; i++){
      var timeRow = document.body.children[1].children[i]
      var timeData = timeRow.children[0].dataset.time;
      var textArea = timeRow.children [1];
      var currentHour = moment().format ("H")


      if (timeData == currentHour){
        textArea.classList.add ("present");
      } else if (timeData > currentHour){
        textArea.classList.add ("future");
      } else {
        textArea.classList.add("past");
      };
      //pull from storage
      var storedSchedule = JSON.parse(localStorage.getItem("mySchedule"));
        if(storedSchedule !== null) {     
          
            var scheduleValues = Object.values(storedSchedule);
            textArea.textContent = scheduleValues[i];
    }
}
}


setStart()

//save button
var allButtons = $("button")
allButtons.on("click",  function(event){
    event.preventDefault();
    //update schedule 
    if(JSON.parse(localStorage.getItem("mySchedule") !== null) ){
        schedule = JSON.parse(localStorage.getItem("mySchedule"));
    }

    var eventData = $(event.target).attr("data-FormNum");

    var textAreaEl = $("textarea[data-formNum='" + eventData +"'")
    //set data value = the correct time 
    schedule["hour" + eventData] = textAreaEl.val();
  
    localStorage.setItem("mySchedule", JSON.stringify(schedule));

})