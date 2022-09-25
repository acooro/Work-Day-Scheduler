
//date set up
setInterval(function (){
  $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
},1000)

//store input information

//test changing of colors
function setStart(){
  for (var i=0; i<2; i++){
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
  }
}
}
setStart()
