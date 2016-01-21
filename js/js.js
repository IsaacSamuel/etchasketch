var i = 1

$(document).ready(function() {
	for (i = 1; i < 101; i++) {
		$(".main").append(function() {
			return ("<div id" + i + "></div>")
		});	
	}
	$("div > div").hover(function() {
		$(this).css({"background-color": "black"})
	});
});
