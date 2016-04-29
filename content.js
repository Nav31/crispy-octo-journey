

$(document).ready(function(){

	chrome.storage.onChanged.addListener(function(value){

		document.addEventListener('click', function(event){
			if(document.getElementById('whatever')) return;
			var theButton = document.createElement('button');
			theButton.setAttribute('id', 'whatever');
			var text = document.createTextNode(value.value.newValue);
			console.log(theButton);
			theButton.appendChild(text);
			var x = event.clientX;
			var y = event.clientY;
			theButton.style.position = 'absolute';
			theButton.style.left = (x - 20) +'px';
			theButton.style.top = (y - 20) +'px';	
			theButton.style.zIndex = "9999";
			document.body.appendChild(theButton);	
		});
	});
});
