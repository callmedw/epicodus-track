$(document).ready(function() {
/*--XX--*/

// -- Front End Logic -- //
  $("#input").submit(function(event) {
    name = $("input#name").val();
    $(".name-fill").text(name);
    event.preventDefault();
    });

  $("form#epicodus-track").submit(function(event) {
    answer1 = parseInt($("select#question1").val());
    answer2 = parseInt($("select#question2").val());
    answer3 = parseInt($("select#question3").val());
    answer4 = parseInt($("select#question4").val());
    answer5 = parseInt($("select#question5").val());
    total = add(answer1, answer2, answer3, answer4, answer5);
    event.preventDefault();
  });

// -- Back End Logic -- //
  add = function(answer1, answer2, answer3, answer4, answer5) {
    return answer1 + answer2 + answer3 + answer3 + answer4 + answer5;
  }

  if (total === 5) {
    $("#address-results").show();
  } else if (total > 5 && < total 14) {
    $("#address-results1").show();
  } else if (age=== 14) {
    $("#address-results2").show();
  } else {
    alert("Please make sure all questions have been answered!");
  }



/*--XX--*/
});
