
$(document).ready(function(){
	// var modal = modal;

		console.log(modal);
		var $modal = $(modal);
		console.log($modal);
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

		theButton.innerText = 'com';
		theButton.style.position = 'relative';
		theButton.style.left = (x - 20) +'px';
		theButton.style.top = (y - 20) +'px';	
		theButton.style.zIndex = "9997";
		theButton.setAttribute('class', 'btn btn-danger-outline');
		theButton.setAttribute('data-toggle', 'modal');
		theButton.setAttribute('data-target', '#myModal');
		$modal.appendTo(theDiv);

		document.getElementById('thediv').appendChild(theButton);

				// Get the modal
		var modal = document.getElementById('myModal');

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal 
		theButton.onclick = function() {
		    modal.style.display = "block";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}

		// $(theButton).on('click', function(){
		// 	console.log('something');
		// 	$modal.on()
		// });
	})();
});