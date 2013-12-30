/*
function sayHello()
{
	 // syntax error here screws up something, commands not working afterward.
	chrome.tabs.query({active: true; currentWindow: true}
	alert("The current url is: " + tabs[0].url);

}
*/
alert("hi");
// chrome.webNavigation.onDOMContentLoaded.addListener(sayHello);

chrome.browserAction.onClicked.addListener(function(tab) {
	alert("button clicked");
	// chrome.extension.getBackgroundPage().console.log("hello.");
});
