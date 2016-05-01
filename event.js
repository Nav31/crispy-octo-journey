
var coordinates;

chrome.contextMenus.create({
	title: "Add a comment",
	id: "radio1",
	contexts: ["all"]
});


chrome.history.onVisited.addListener(function(history){
	console.log(history.url);
	chrome.runtime.sendMessage('hello');
})

//when clicking the 'add a comment 'field in the context menu window run the function;

chrome.contextMenus.onClicked.addListener(myFunction);

//when a message is received we check, if it's equal to save we save the information in the storage with the current tab url.

chrome.runtime.onMessage.addListener(function(message){
	if(message === 'save'){
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		    var url = tabs[0].url;
		    chrome.storage.sync.get('theDiv', function(theDiv){
		    	console.log(theDiv + '');
		    	chrome.storage.sync.set({
		    		site: theDiv,
		    		url: url
		    	}, function(site){
		    		console.log('site saved');
		    	});
		    })
		});
	} else {
		coordinates = message.split(' ');
	}
});

//esecutes the scripts:

function myFunction() {
	chrome.tabs.executeScript(null, { code: 'var x =' + coordinates[0] + "; var y = " + coordinates[1] + ";" });
	chrome.tabs.executeScript(null, {file: "modal.js"});
	chrome.tabs.executeScript(null, { file: "add-button.js" });
}

