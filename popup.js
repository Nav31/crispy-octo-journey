var stupid = 'hey stupid';
$(document).ready(function(){
console.log(chrome);

	var text;
	$('button').on('click', function(){
		var text = $(this).prev().val();
	    
	    chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            var message = values.namesArr;
            chrome.tabs.sendMessage(tabs[0].id, text, function(response) {
                // console.log(response);
            });
        });
	});
   

});