

$(document).ready(function(){

	chrome.storage.onChanged.addListener(function(value){
		var commentElement = document.createElement('p');
		var text = document.createTextNode(value.value.newValue);
		commentElement.appendChild(text);

		document.addEventListener('click', function(event){
			var x = event.clientX;
			var y = event.clientY;
			commentElement.style.position = 'absolute';
			commentElement.style.left = x+'px';
			commentElement.style.top = y+'px';	
			commentElement.style.zIndex = "9999";
			document.body.appendChild(commentElement);	
		});
	});

});
