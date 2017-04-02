
$(document).ready(function() {
/*--XX--*/

//--front end logic---//
  $("#input").submit(function(event) {
    event.preventDefault();
    name = $("input#name").val();
    $(".name-fill").text(name);
  });

  var add = function(answer1, answer2, answer3, answer4, answer5) {
  return answer1 + answer2 + answer3 + answer3 + answer4 + answer5
  }

  $("form#epicodus-track").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("select#question1").val());
    var answer2 = parseInt($("select#question2").val());
    var answer3 = parseInt($("select#question3").val());
    var answer4 = parseInt($("select#question4").val());
    var answer5 = parseInt($("select#question5").val());
    total = add(answer1, answer2, answer3, answer4, answer5);
    answerIf(total);
  });
//--back end logic---//
  function answerIf(total) {
    if (total === 5) {
      $("form#epicodus-track").hide();
      $("#ruby-results").show();
    } else if (total > 5 && total < 14) {
      $("form#epicodus-track").hide();
      $("#php-results").show();
    } else if (total === 14) {
      $("form#epicodus-track").hide();
      $("#java-results").show();
    } else {
      alert("Please make sure all questions have been answered!");
    }
  };


/*--XX--*/
});
