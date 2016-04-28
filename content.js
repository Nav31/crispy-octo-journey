console.log('wtf');
console.log(chrome);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
});