

// chrome.browserAction.onClicked.addListener(function() {
// 	chrome.tabs.executeScript(null, {
// 	});
// });

chrome.contextMenus.create({
	title: "Leave Comment",
	id: "radio1",
	contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(myFunction);

function myFunction() {
	chrome.tabs.executeScript(null, { file: "jquery-2.2.3.min.js" });
	chrome.tabs.executeScript(null, { file: "add-button.js" });
}
