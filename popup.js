
$(document).ready(function(){

	$('button').on('click', function(){
		var text = $(this).prev().val();
		chrome.storage.sync.set({"value": text}, function(something){
			console.log('it did work');
		});
	});
   

});