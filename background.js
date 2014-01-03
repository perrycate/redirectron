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
var proxyUrl = "http://tommy-b.appspot.com/"; // maybe use google translate instead?

function redirect(tab)
{
	// gets the current url, and appends the proxy server to use.
	var url = tab.url;
	url = url.slice((url.indexOf("://") + 3));

	var redirectUrl = proxyUrl + url

	// changes the current url to use the selected proxy server.
	chrome.tabs.update(tab.id, {url: redirectUrl});

	// ? is there a way to change the url back to normal without reloading after the
	// page is loaded, to hide evidence of a proxy?

	// What follows is just experimentation
	/* Why doesn't this work?
	var a = document.title;
	alert("The title is: " + a);
	*/
}

chrome.browserAction.onClicked.addListener(redirect);
// ? note to self: why does the redirect function work without being passed anything?
// more research on passing functions required.

