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

// finds the current url when the icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
	alert("Your url is: " + tab.url);


	// Confirm that this code block ran succesfully, since I can't find where error
	// messages are outputted.
	alert("code succesfully run.");
});
