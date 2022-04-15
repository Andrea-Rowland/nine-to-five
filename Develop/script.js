$(document).ready(function(){
    // MEDIA QUERY TO DISPLAY CURRENT DATE WITH JQUERY
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        
        localStorage.setItem(time, text);
    });

    // $("#9 .description").text(localStorage.getItem("9"));
    // $("#10 .description").text(localStorage.getItem("10"));
    // $("#11 .description").text(localStorage.getItem("11"));
    // $("#12 .description").text(localStorage.getItem("12"));
    // $("#13 .description").text(localStorage.getItem("13"));
    // $("#14 .description").text(localStorage.getItem("14"));
    // $("#15 .description").text(localStorage.getItem("15"));
    // $("#16 .description").text(localStorage.getItem("16"));

    function updateColor() {
        var currentHour = moment().hour();

        $(".row").each(function(){
            var blockHour = parseInt($(this).attr("id"));

            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if(blockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    updateColor();