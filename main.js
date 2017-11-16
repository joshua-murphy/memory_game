var sampleArr = ["mercury.jpg", "venus.jpg", "earth.jpg", "mars.jpg", "jupiter.jpg", 
"saturn.png", "uranus.jpg", "neptune.jpg", "mercury.jpg", "venus.jpg", "earth.jpg", 
"mars.jpg", "jupiter.jpg", "saturn.png", "uranus.jpg", "neptune.jpg"]
var randArr = []
countUp = 0


function getRandNum() {
  var rand = Math.floor(Math.random() * 16 )
  var aarVar = sampleArr[rand]
  if (aarVar === undefined)
    getRandNum()
    else
      randArr.push(aarVar)
      delete sampleArr[rand]
}

while (randArr.length < 16) {
  getRandNum()
  changeAlt(countUp)
  ++countUp
}

function changeAlt(num) {
  var numVar = ($("div").children("div").children("img:eq(" + num + ")"))
  if( numVar.attr("src") == num ) {
    numVar.attr("alt", "images/" + randArr[num])
  } else
  return
}

$("img").attr("src", "images/card.jpg")


$(document).ready( function() {

  var ansArr = []  
  var successArr = []
  var attempts = 0
  var matches = 0


  $("img").on("click", function() {
    if( $(this).attr("id") === "no_click") {
      return
  } else {
      console.log(attempts)
      $("#attempts").text("Attempts: " + ++attempts)
      var source = $(this).attr("alt")
      $(this).attr("src", source )
      $(this).attr("id", "no_click") 
      addToArr(source) }
  })

  function addToArr(source) {  
    $(this).attr("id", "no_click")
    ansArr.push(source)
    ansArr.length > 1 ? checkMatch() : console.log("")
  }
  

  function checkMatch() {
    ansArr.length > 2 ? ansArr.shift() : console.log("")
    ansArr[ansArr.length - 1] === ansArr[ansArr.length - 2] ? success() : flipOver()
    ansArr = []
  }

  function flipOver() {
    $("img").attr("id", "no_click")    
    setTimeout( function() {
      $("img").attr("src", "images/card.jpg" )     
      ansArr = []
      $("img").attr("id", "")
    }, 500)
  }

  function success() {
    successArr.push(ansArr[1])
    $("#matches").text("Matches: " + ++matches)
  }

})
