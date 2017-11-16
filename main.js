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

console.log(randArr)

function changeAlt(num) {
  var numVar = ($("div").children("div").children("img:eq(" + num + ")"))
  console.log(numVar)
  if( numVar.attr("src") == num ) {
    console.log("yay")
    numVar.attr("alt", "images/" + randArr[num])
  } else
  console.log("id check fail")
}

$("img").attr("src", "images/card.jpg")


$(document).ready( function() {

  var ansArr = []  
  var successArr = []





  $("img").on("click", function() {
    if( $(this).attr("id") === "no_click") {
      return
  } else {
      // console.log($(this).attr("id"))    
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
    ansArr.length > 2 ? ansArr.shift() : console.log("thisisgood")
    ansArr[ansArr.length - 1] === ansArr[ansArr.length - 2] ? success() : flipOver()
    ansArr = []
  }

  function flipOver() {
    $("img").attr("id", "no_click")    
    // console.log("no click")
    setTimeout( function() {
      $("img").attr("src", "images/card.jpg" )     
      ansArr = []
      // console.log("waiting")
      $("img").attr("id", "")
    }, 500)
  }

  function success() {
    // console.log("success")
    successArr.push(ansArr[1])
    // console.log(successArr)
  }


})
