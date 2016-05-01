
$(document).ready(function(){

	var $modal = $(modal);
	var currentModal;

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
	console.log("TheDiv ", document.getElementById('thediv'));
	document.getElementById('thediv').appendChild(theButton);

			// Get the modal
	// var modal = document.getElementById('myModal');

	$(theButton).on('click', function(){
		currentModal = $(this).prev();
		currentModal.css("display", "block");
		currentModal.find("#postIt").on('click', function(){
			var comment = $(this).prev();
			var newPar = $("<div class='alert alert-success'><p> user: " + comment.val() + "</p></div>");
			$(this).parent().append(newPar);
			console.log($(this).parent().parent());
			currentModal.css("display", "none");
			console.log(theDiv);
			chrome.runtime.sendMessage(theDiv);
		});
		currentModal.find("#closeIt").on('click', function(){
			currentModal.css("display", "none");
		});
	});

});









