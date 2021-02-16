$(".board").hide();

//1
$(".start").click(function() {
  $(".board").slideDown(); 
});

//2
$(".end").click(function() {
   $(".board").slideUp(); 
});

//3
$("img").hover(function(){
    $("img").css("border","5px solid blue");
});
//4
$("img").mouseenter(function(){
	$("img").css("border", "5px dashed black");
});                              
//5
$("img").dblclick(function(){
	$(".company-slogan").text("Connecting Communities. Creating Opportunities");
});
//6
$("img").mouseleave(function(){
    $(".company-slogan").hide();
});    