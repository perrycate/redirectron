var proxyUrl = "http://tommy-b.appspot.com/"; // maybe use google translate instead?

function redirect(tab)
{
	// gets the current url, formats it, and prepends the proxy to use.
	var url = tab.url;
	url = url.slice((url.indexOf("://") + 3));
	var redirectUrl = proxyUrl + url

	// redirects to the modified url
	chrome.tabs.update(tab.id, {url: redirectUrl});
}

chrome.browserAction.onClicked.addListener(redirect);
// ? note to self: why does the redirect function work without being passed anything?
// more research on passing functions required.

