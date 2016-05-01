
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
	theButton.style.width = "1.5em";
	theButton.style.height = "1.5em";
	// theButton.style.border = "2px";

	theButton.setAttribute('class', 'btn btn-danger-outline');
	theButton.setAttribute('data-toggle', 'modal');
	theButton.setAttribute('data-target', '#myModal');
	$modal.appendTo(theDiv);
	document.getElementById('thediv').appendChild(theButton);


	$(theButton).on('click', function(){
		currentModal = $(this).prev();
		currentModal.css("display", "block");
		currentModal.find('textarea').val("");
		currentModal.find("#postIt").unbind('click').click(function(){

			var comment = $(this).prev().val();
			if(comment !== "") {
				var newPar = $("<div class='alert alert-success'><p> user: " + comment + "</p></div>");
				$(this).parent().append(newPar);
				currentModal.css("display", "none");
				chrome.runtime.sendMessage('save', function(url){
					console.log(theDiv.baseURI)
					console.log({site: theDiv, url: url});
				});

			} else {
				alert('you didn\'t insert any comment');
			}
		});
		currentModal.find("#closeIt").unbind('click').click(function(){
			currentModal.css("display", "none");
		});
	});

});









