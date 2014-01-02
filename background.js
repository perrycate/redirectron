/*
function sayHello()
{
	 // syntax error here screws up something, commands not working after this point.
	 // (if uncommented that is.)
	 // this is also trying to find the current url.
	chrome.tabs.query({active: true; currentWindow: true}
	alert("The current url is: " + tabs[0].url);

}
*/

// chrome.webNavigation.onDOMContentLoaded.addListener(sayHello);
// ^^^^ Just random things I'm testing. Ignore for now.


// url of the proxy to use. How to incorporate an option for user to change this?
var proxyUrl = "http://tommy-b.appspot.com/"


chrome.browserAction.onClicked.addListener(function(tab) {
	
	// gets the current url, and appends the proxy server to use.
	var url = tab.url
	var redirectUrl = proxyUrl + url

	// changes the current url to use the selected proxy server.
	chrome.tabs.update(tab.id, {url: redirectUrl});

	// Confirm that this code block ran succesfully, since I can't find where error
	// messages are outputted.
	alert("code succesfully run.");
});
