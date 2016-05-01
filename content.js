

$(document).ready(function(){
	// chrome.runtime.onMessage.addListener(function(tabUrl){
	// 	console.log(tabUrl);
	// });

	//when the page loads we attach an empty div to the top of the page with absolute position.

	var theDiv = document.createElement('div');
		theDiv.setAttribute('id', 'thediv');
		theDiv.style.width = 100 + "%";
		theDiv.style.position = 'Absolute';
		theDiv.style.left = "0px";
		theDiv.style.top = "0px";
		$("body").prepend(theDiv);

		//when right click save the coordinates and send them to the event.js as a message.

	$(document).on('contextmenu', function(event){
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
			var message = x + ' ' + y; 
			chrome.runtime.sendMessage( message );
	});
});

























