$("#submit").click(event => {
  event.preventDefault();


  const userInput = {
    name: $("#userName").val().trim(),
    image: $("#userPhoto").val().trim(),
    scores: [
      $("#question1").val().trim(),
      $("#question2").val().trim(),
      $("#question3").val().trim(),
      $("#question4").val().trim(),
      $("#question5").val().trim(),
      $("#question6").val().trim(),
      $("#question7").val().trim(),
      $("#question8").val().trim(),
      $("#question9").val().trim(),
      $("#question10").val().trim()
    ]
  }

  $.post("/api/friends", userInput).done(res => {
    $("#match").text(res.matchName);
    $("#matchImage").attr("src", res.matchImage);

    $("#myModal").modal("toggle");
  })

})