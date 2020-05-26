var timeDisplay = $("#currentDay");
var fetchTime = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentHour = parseInt(moment().format('HH'))

$( document ).ready(function() {
    $(timeDisplay).text(fetchTime);

    $(".text9").text(localStorage.getItem("textKey9"));
    $(".text10").text(localStorage.getItem("textKey10"));
    $(".text11").text(localStorage.getItem("textKey11"));
    $(".text12").text(localStorage.getItem("textKey12"));
    $(".text1").text(localStorage.getItem("textKey1"));
    $(".text2").text(localStorage.getItem("textKey2"));
    $(".text3").text(localStorage.getItem("textKey3"));
    $(".text4").text(localStorage.getItem("textKey4"));
    $(".text5").text(localStorage.getItem("textKey5"));
    

    $(".textarea").each(function(index, value) {
        var parsedValue = parseInt(index)+9;

        if (parsedValue === currentHour){
            $(this).addClass("present")
        }
        if (parsedValue < currentHour){
            $(this).addClass("past")
        }
        if (parsedValue > currentHour){
            $(this).addClass("future")
        }
      });
});

$(".saveBtn").click(function() {
    localStorage.setItem("textKey9", $('.text9').val());
    localStorage.setItem("textKey10", $('.text10').val());
    localStorage.setItem("textKey11", $('.text11').val());
    localStorage.setItem("textKey12", $('.text12').val());
    localStorage.setItem("textKey1", $('.text1').val());
    localStorage.setItem("textKey2", $('.text2').val());
    localStorage.setItem("textKey3", $('.text3').val());
    localStorage.setItem("textKey4", $('.text4').val());
    localStorage.setItem("textKey5", $('.text5').val());
})