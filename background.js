/*
function sayHello()
{
	 // syntax error here screws up something, commands not working after this point.
	 // (if uncommented that is.)
	chrome.tabs.query({active: true; currentWindow: true}
	alert("The current url is: " + tabs[0].url);

}
*/

// chrome.webNavigation.onDOMContentLoaded.addListener(sayHello);

chrome.browserAction.onClicked.addListener(function(tab) {
	alert("button clicked");
	alert("Your url is: " + tab.url);


	alert("code succesfully run.");
});
