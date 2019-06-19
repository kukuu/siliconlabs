$(document).ready(function(){
	//delegation with Mutual Exclusion Flags}
	$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();
	$(".accordion h3").click(function(){
		$(this).next("p").slideToggle("slow").
		siblings("P:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");

	});
});