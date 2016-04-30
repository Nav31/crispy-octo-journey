

$(document).ready(function(){
	$(document).on('contextmenu', function(event){
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
			var message = x + ' ' + y; 
			chrome.runtime.sendMessage( message );
	});
});


//what do I want to do?

//to activate the chrome extension, I click it and activate which cmkaes it active, no need for a pop up page.

//right click of the mouse choose : leave a comment; Or can we do it cooler than a right click?

//a pop up modal appears and ask you to fill in the comment. you write and click on post. 

//The modal closes and a semi-transparent button is on the page.

//if you click on the button again it brings back the modal with the text you previously wrote on it.



























