$(document).ready(function() {
	$("a").on("click", function(event) {
		event.preventDefault();
		var $ids = $(this).attr('id');
		var pageurl = $ids + '.html';
		$("#ifrm").attr("src", pageurl);
	})
});