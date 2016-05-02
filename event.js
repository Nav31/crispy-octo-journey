
var coordinates;

chrome.contextMenus.create({
	title: "Add a comment",
	id: "radio1",
	contexts: ["all"]
});


chrome.history.onVisited.addListener(function(history){
	console.log(history.url);
	chrome.runtime.onMessage.addListener(function(message, sender, response){
		if(message === 'url') {
			console.log('inside', history.url);
			response(history.url);
		}
	});
})

//when clicking the 'add a comment 'field in the context menu window run the function;

chrome.contextMenus.onClicked.addListener(myFunction);

//when a message is received we check, if it's equal to save we save the information in the storage with the current tab url.

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	console.log(message);
	coordinates = message.split(' ');
});

//esecutes the scripts:

function myFunction() {
	chrome.tabs.executeScript(null, { code: 'var x =' + coordinates[0] + "; var y = " + coordinates[1] + ";" });
	chrome.tabs.executeScript(null, {file: "helper-functions.js"});
	chrome.tabs.executeScript(null, {file: "modal.js"});
	chrome.tabs.executeScript(null, { file: "add-button.js" });
}

