

$(document).ready(function(){

	// chrome.storage.onChanged.addListener(function(value){

	// 	//will position our button to this div prepended to the body of the page.
	// 	var theDiv = document.createElement('div');
	// 	theDiv.setAttribute('id', 'thediv');
	// 	theDiv.style.width = 100 + "%";
	// 	theDiv.style.position = 'Absolute';
	// 	theDiv.style.left = "0px";
	// 	theDiv.style.top = "0px";
	// 	$("body").prepend(theDiv);	
		
	// 	document.addEventListener('click', function(event){
	// 		var log = document.getElementsByClassName('whatever');
	// 		if(log.length > 0) return;
	// 		var theButton = document.createElement('button');
	// 		theButton.setAttribute('class', 'whatever');
	// 		var text = document.createTextNode(value.value.newValue);
	// 		theButton.appendChild(text);
	// 		var x = event.clientX + document.body.scrollLeft;
	// 		var y = event.clientY + document.body.scrollTop;
	// 		theButton.style.position = 'relative';
	// 		theButton.style.left = (x - 20) +'px';
	// 		theButton.style.top = (y - 20) +'px';	
	// 		theButton.style.zIndex = "9999";
	// 		theButton.setAttribute('draggable', "true");
	// 		document.getElementById('thediv').appendChild(theButton);	
	// 	});
	// });

	$(document).on('contextmenu', function(event){
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
			var message = x + ' ' + y; 
			chrome.runtime.sendMessage( message );
	})

});


//what do I want to do?

//to activate the chrome extension, I click it and activate which cmkaes it active, no need for a pop up page.

//right click of the mouse choose : leave a comment; Or can we do it cooler than a right click?

//a pop up modal appears and ask you to fill in the comment. you write and click on post. 

//The modal closes and a semi-transparent button is on the page.

//if you click on the button again it brings back the modal with the text you previously wrote on it.



























