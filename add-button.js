
$(document).ready(function(){
	(function() { var log = document.getElementsByClassName('whatever');
		console.log(x, " ", y);
		var theDiv = document.createElement('div');
		theDiv.setAttribute('id', 'thediv');
		theDiv.style.width = 100 + "%";
		theDiv.style.position = 'Absolute';
		theDiv.style.left = "0px";
		theDiv.style.top = "0px";
		$("body").prepend(theDiv);
		if(log.length > 0) return;
		var theButton = document.createElement('button');
		theButton.setAttribute('class', 'whatever');
		// var text = document.createTextNode(value.value.newValue);
		// theButton.appendChild(text);
		// chrome.runtime.onMessage(function(message){
		// 	var array = message.split(' ');
		// 	x = array[0];
		// 	y = array[1];
		// })
		// x = event.clientX + document.body.scrollLeft;
		// y = event.clientY + document.body.scrollTop;
		theButton.innerText = 'The Comment';
		theButton.style.position = 'relative';
		theButton.style.left = (x - 20) +'px';
		theButton.style.top = (y - 20) +'px';	
		theButton.style.zIndex = "9999";
		theButton.setAttribute('draggable', "true");
		console.log(theButton);
		document.getElementById('thediv').appendChild(theButton);
	})();
});