
$(document).ready(function(){

	var $modal = $(modal);
	var currentModal;

	var theDiv = document.getElementById('thediv');
	var theButton = document.createElement('button');
	var onOff = document.createElement('button');

	//FUTURE FEATURE:
	//------------------------------------

	// onOff.innerText = 'toggle';
	// onOff.setAttribute('id', 'toggle');

	// if(!document.getElementById('toggle')){
	// 	theDiv.appendChild(onOff);
	// }

	// onOff.onclick(function(){

	// });
	//------------------------------------

	theButton.setAttribute('class', 'whatever');
	theButton.style.position = 'relative';
	theButton.style.left = (x - 20) +'px';
	theButton.style.top = (y - 20) +'px';	
	theButton.style.zIndex = "9997";
	theButton.style.width = "2em";
	theButton.style.height = "2em";
	theButton.innerText = "0";
	// theButton.style.border = "2px";

	theButton.setAttribute('class', 'btn btn-danger-outline');
	theButton.setAttribute('data-toggle', 'modal');
	theButton.setAttribute('data-target', '#myModal');
	$modal.appendTo(theDiv);
	document.getElementById('thediv').appendChild(theButton);


	$(theButton).on('click', function(){
		$theButton = $(this);
		currentModal = $(this).prev();
		currentModal.css("display", "block");
		currentModal.find('textarea').val("");
		currentModal.find("#postIt").unbind('click').click(function(){

			var comment = $(this).prev().val();
			if(comment !== "") {
				var newPar = $("<div class='alert alert-success'><p> Massimo:     " + comment + "</p></div>");
				$(this).parent().append(newPar);

				$theButton.text(+$theButton.text()+1);
				currentModal.css("display", "none");
				chrome.runtime.sendMessage('save', function(){
					url = theDiv.baseURI
					// console.log({site: theDiv, url: url});
					$.ajax({
					  method: "POST",
					  dataType: "json",
					  url: "http://localhost:1337/api/comments/",
					  data: {site: mapDOM(theDiv, true) , url: parseUrl(url)}
					})
					.done(function( msg ) {
					  alert( "Data Saved: " + msg );
					});
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









