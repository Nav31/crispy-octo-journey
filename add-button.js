
$(document).ready(function(){
	// var modal = modal;

		var $modal = $(modal);

	(function() { 

		var theDiv = document.getElementById('thediv');
		var theButton = document.createElement('button');
		theButton.setAttribute('class', 'whatever');

		theButton.style.position = 'relative';
		theButton.style.left = (x - 20) +'px';
		theButton.style.top = (y - 20) +'px';	
		theButton.style.zIndex = "9997";
		theButton.style.width = "2em";
		theButton.style.height = "2em";

		theButton.setAttribute('class', 'btn btn-danger-outline');
		theButton.setAttribute('data-toggle', 'modal');
		theButton.setAttribute('data-target', '#myModal');
		$modal.appendTo(theDiv);
		console.log(document.getElementById('thediv'));
		document.getElementById('thediv').appendChild(theButton);

				// Get the modal
		var modal = document.getElementById('myModal');

		// When the user clicks on the button, open the modal 
		// theButton.onclick = function() {
		//     modal.style.display = "block";
		//     // modal.find("textarea").val() = "";
		// };

		$(theButton).on('click', function(){
			console.log("hey");
			$(this).prev().css("display", "block");
		})

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		};

		$("#postIt").on('click', function(){
			var comment = $(this).prev();
			var newPar = $("<div class='alert alert-success'><p> user: " + comment.val() + "</p></div>");
			$(this).parent().append(newPar);
			// $(this).parent().css("display", "none");;
			console.log(theDiv);
			chrome.runtime.sendMessage(theDiv);
		});
	})();
});









