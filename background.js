

chrome.browserAction.onClicked.addListner( function(tab) {
	chrome.tabs.executeScript({file: 'content.js'})
})
