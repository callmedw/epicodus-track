$(document).ready(function() {
/*--TOP--*/

/*  $("#name-start").click(function(){
    $("#epicodus-track").show();
    });
*/
$("#input").submit(function(event) {
    name = $("input#name").val();
     $(".name").text(name);



    event.preventDefault();
    });



/*  $("#address-results").show();*/

/*--BOTTOM--*/
});
