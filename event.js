
var coordinates;

chrome.contextMenus.create({
	title: "Leave Comment",
	id: "radio1",
	contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(myFunction);

chrome.runtime.onMessage.addListener(function(message){
	console.log(message);
	coordinates = message.split(' ');
})

function myFunction() {
	chrome.tabs.executeScript(null, { file: "jquery-2.2.3.min.js" });

	chrome.tabs.executeScript(null, {
		code: 'var x =' + coordinates[0] + "; var y = " + coordinates[1] + ";"
	}, function() {
		
		chrome.tabs.executeScript(null, {file: "modal.js"}, function(){

			chrome.tabs.executeScript(null, { file: "add-button.js" });
		});
	});
}
