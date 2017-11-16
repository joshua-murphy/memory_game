$("img").attr("src", "images/card.jpg")

$(document).ready( function() {

  var ansArr = []  
  var successArr = []

  $("img").on("click", function() {
    if( $(this).attr("id") === "no_click") {
      return
  } else {
      console.log($(this).attr('id'))    
      var source = $(this).attr("alt")
      $(this).attr("src", "images/" + source )
      $(this).attr("id", "no_click") 
      addToArr(source) }
  })

  function addToArr(source) {  
    $(this).attr("id", "no_click")
    ansArr.push("images/" + source)
    ansArr.length > 1 ? checkMatch() : console.log("")
  }

  

  function checkMatch() {
    ansArr.length > 2 ? ansArr.shift() : console.log("thisisgood")
    ansArr[ansArr.length - 1] === ansArr[ansArr.length - 2] ? success() : flipOver()
    ansArr = []
  }

  function flipOver() {
    $("img").attr("id", "no_click")    
    console.log("no click")
    setTimeout( function() {
      $("img").attr("src", "images/card.jpg" )     
      ansArr = []
      console.log("waiting")
      $("img").attr("id", "")
    }, 500)
  }

  function success() {
    console.log("success")
    successArr.push(ansArr[1])
    console.log(successArr)
  }

})
