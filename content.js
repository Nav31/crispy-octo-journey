

$(document).ready(function(){

	chrome.storage.onChanged.addListener(function(value){
		var commentElement = document.createElement('p');
		console.log(value);
		var text = document.createTextNode(value.value.newValue);
		commentElement.appendChild(text);

		document.addEventListener('click', function(event){
			var x = event.clientX;
			var y = event.clientY;
			console.log(x + y)
			commentElement.style.position = 'absolute';
			commentElement.style.left = x+'px';
			commentElement.style.top = y+'px';	
			commentElement.style.zIndex = "10";
			console.log(commentElement);
			document.body.appendChild(commentElement);	
		});
	});

});
