

$(document).ready(function(){
	$(document).on('contextmenu', function(event){
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
			var message = x + ' ' + y; 
			chrome.runtime.sendMessage( message );
	});
});

























