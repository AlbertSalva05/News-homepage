$(function(){
	// trigger of menu button
	$(".menuBtn").on("click", function() {
		$(".menuBar").addClass("active");
		$('html').css('overflow-y', 'hidden');
	});

	// trigger close button
	$(".closeBtn").on("click", function() {
		$(".menuBar").removeClass("active");
		$('html').css('overflow-y', 'auto');
	});
});
