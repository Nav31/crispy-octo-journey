

$(document).ready(function(){
	var value; 
	chrome.storage.sync.get("value", function(vl){
		value = vl;
		var title = document.getElementsByTagName('title');
		title[0].innerText = value.value;
		console.log(value);
		console.log(title);
	});

})