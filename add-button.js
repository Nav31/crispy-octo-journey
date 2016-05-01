
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
	console.log("TheDiv ", theDiv);
	document.getElementById('thediv').appendChild(theButton);


	$(theButton).on('click', function(){
		// var $button = $(this);
		currentModal = $(this).prev();
		currentModal.css("display", "block");
		currentModal.find("#postIt").unbind('click').click(function(){

			var comment = $(this).prev().val();
			var newPar = $("<div class='alert alert-success'><p> user: " + comment + "</p></div>");
			$(this).parent().append(newPar);
			currentModal.css("display", "none");
			chrome.storage.sync.set({ "theDiv" : theDiv }, function(){
				chrome.runtime.sendMessage( 'save' );
			});
		});
		currentModal.find("#closeIt").unbind('click').click(function(){
			currentModal.css("display", "none");
			chrome.storage.sync.get("theDiv", function(thething){
				console.dir(thething);
			});

		});
	});

});









