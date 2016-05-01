

$(document).ready(function(){
	var theDiv = document.createElement('div');
		theDiv.setAttribute('id', 'thediv');
		theDiv.style.width = 100 + "%";
		theDiv.style.position = 'Absolute';
		theDiv.style.left = "0px";
		theDiv.style.top = "0px";
		$("body").prepend(theDiv);
	$(document).on('contextmenu', function(event){
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
			var message = x + ' ' + y; 
			chrome.runtime.sendMessage( message );
	});
});

























