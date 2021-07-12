var today = moment();

//Current date


$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY")); 
    $(".saveBtn").on("click", function(){
        var thingToDo = $(this).siblings(".description").val();
        var now = $(this).parent().attr("id");
        localStorage.setItem(now, thingToDo);

    }); 
    
//Time slots

    $("#7 .description").val(localStorage.getItem("7"));

    $("#8 .description").val(localStorage.getItem("8"));

    $("#9 .description").val(localStorage.getItem("9"));

    $("#10 .description").val(localStorage.getItem("10"));

    $("#11 .description").val(localStorage.getItem("11"));

    $("#12 .description").val(localStorage.getItem("12"));

    $("#13 .description").val(localStorage.getItem("13"));

    $("#14 .description").val(localStorage.getItem("14"));

    $("#15 .description").val(localStorage.getItem("15"));

    $("#16 .description").val(localStorage.getItem("16"));

    $("#17 .description").val(localStorage.getItem("17"));
    
    $("#18 .description").val(localStorage.getItem("18"));


//Past, present, and future colors  
   
    function chrono(){
        var hereAndNow = moment().hour(); 
        
        $('.time-block').each(function(){
            var wutTime = parseInt($(this).attr("id"));
            if (wutTime < hereAndNow){
                $(this).addClass("past");
            } else if (wutTime === hereAndNow){
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    }
    chrono();
    var timeInterval = setInterval(chrono, 1000);


});
