
var coordinates;
console.log(chrome);
chrome.contextMenus.create({
	title: "Leave Comment",
	id: "radio1",
	contexts: ["all"]
});

// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
// 	var url = tabs[0].url;
// 	chrome.runtime.sendMessage(url);
// });


chrome.contextMenus.onClicked.addListener(myFunction);

chrome.runtime.onMessage.addListener(function(message){
	if(message === 'save'){
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		    var url = tabs[0].url;
		    chrome.storage.sync.get('theDiv', function(theDiv){
		    	chrome.storage.sync.set({
		    		url: url,
		    		site: theDiv
		    	}, function(site){
		    		console.log('site saved');
		    	});
		    })
		});
	} else {
		coordinates = message.split(' ');
	}
});


function myFunction() {
	chrome.tabs.executeScript(null, { code: 'var x =' + coordinates[0] + "; var y = " + coordinates[1] + ";" });
	chrome.tabs.executeScript(null, {file: "modal.js"});
	chrome.tabs.executeScript(null, { file: "add-button.js" });
}

