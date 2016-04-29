

$(document).ready(function(){

	chrome.storage.onChanged.addListener(function(value){

		document.addEventListener('click', function(event){
			var theButton = document.createElement('button');
			var text = document.createTextNode(value.value.newValue);
			theButton.appendChild(text);
			var x = event.clientX;
			var y = event.clientY;
			theButton.style.position = 'absolute';
			theButton.style.left = x +'px';
			theButton.style.top = (y - 30) +'px';	
			theButton.style.zIndex = "9999";
			document.body.appendChild(theButton);	
		});
	});
});
