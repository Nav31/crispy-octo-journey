

$(document).ready(function(){

	chrome.storage.onChanged.addListener(function(value){

		var modal = document.createElement('div');
		modal.innerHtml = '<div><a data-target="#myModal" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">HELP</a></div>';

		//will position our button to this div prepended to the body of the page.
		var theDiv = document.createElement('div');
		theDiv.setAttribute('id', 'thediv');
		theDiv.style.width = 100 + "%";
		theDiv.style.position = 'Absolute';
		theDiv.style.left = "0px";
		theDiv.style.top = "0px";
		$("body").prepend(theDiv);	
		
		document.addEventListener('click', function(event){
			var log = document.getElementsByClassName('whatever')
			if(log.length > 0) return;
			var theButton = document.createElement('button');
			theButton.setAttribute('class', 'whatever');
			var text = document.createTextNode(value.value.newValue);
			theButton.appendChild(text);
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
			theButton.style.position = 'relative';
			theButton.style.left = (x - 20) +'px';
			theButton.style.top = (y - 20) +'px';	
			theButton.style.zIndex = "9999";
			theButton.setAttribute('draggable', "true");
			document.getElementById('thediv').appendChild(theButton);	
		});

		$(".whatever").on('click', function(){
			document
		})
	});



});
