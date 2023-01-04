$("h1").addClass("big-title margin-50");

$("button").text("Don't Click Me");

console.log($('img').attr("src"));

$('a').attr("href", "https://www.yahoo.com");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});