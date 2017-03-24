$(document).ready(function() {
/*--TOP--*/

/*  $("#name-start").click(function(){
    $("#epicodus-track").show();
    });
*/
  $("#input").submit(function(event) {
    name = $("input#name").val();
     $(".name-fill").text(name);
  });

     $("form#epicodus-track").submit(function(event) {
       question1 = parseInt($("select#question1").val());
       question2 = parseInt($("select#question2").val());
       question3 = parseInt($("select#question3").val());
       question4 = parseInt($("select#question4").val());
       question5 = parseInt($("select#question5").val());



    event.preventDefault();
    });



/*  $("#address-results").show();*/

/*--BOTTOM--*/
});
