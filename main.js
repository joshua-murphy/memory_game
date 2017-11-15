$("img").attr("src", "images/card.jpg")

$(document).ready( function() {

  var ansArr = []  
  var successArr = []

  $("img").on("click", function() {
    var source = $(this).attr("alt")
    $(this).attr("src", "images/" + source )
    $(this).attr("id", "no_click")
    ansArr.push("images/" + source)
    console.log(ansArr)
    ansArr.length > 1 ? checkMatch() : console.log("test")

  })

  function checkMatch() {
    ansArr.length > 2 ? ansArr.shift() : console.log("")
    ansArr[ansArr.length - 1] === ansArr[ansArr.length - 2] ? success() : flipOver()
    ansArr = []
  }

  function flipOver() {
    setTimeout( function() {
      $("img").attr("src", "images/card.jpg" )     
      ansArr = []
      console.log("waiting")
    }, 500)
  }

  function success() {
    successArr.push(ansArr[1])
    console.log(successArr)
  }


})
