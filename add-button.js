
$(document).ready(function(){
	(function() { 
		
		var log = document.getElementsByClassName('whatever');
		var theDiv = document.createElement('div');
		theDiv.setAttribute('id', 'thediv');
		theDiv.style.width = 100 + "%";
		theDiv.style.position = 'Absolute';
		theDiv.style.left = "0px";
		theDiv.style.top = "0px";
		$("body").prepend(theDiv);

		var theButton = document.createElement('button');
		theButton.setAttribute('class', 'whatever');

		theButton.innerText = 'The Comment';
		theButton.style.position = 'relative';
		theButton.style.left = (x - 20) +'px';
		theButton.style.top = (y - 20) +'px';	
		theButton.style.zIndex = "9999";
		// theButton.setAttribute('href', chrome.extension.getURL('modal.html'));


		document.getElementById('thediv').appendChild(theButton);

		$('.whatever').click(function(){
			// alert('hey you!');
			// $('whatever').trigger('click');
			// console.log('wtf');
			window.open(chrome.extension.getURL('background.html'));
		});
	})();
});