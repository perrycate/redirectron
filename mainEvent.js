var proxyUrl = "http://tommy-b.appspot.com/"; // maybe use a different proxy?

function redirect(tab)
{
	var url = tab.url;
	var redirectUrl; 

	if(url.indexOf(proxyUrl) == -1) // if the proxy is not already part of the url
	{
		// removes the extraneous "http://" and prepends the proxy filter
		url = url.slice(url.indexOf("://") + 3);
		redirectUrl = proxyUrl + url;
	}
	else
	{
		// removes the proxy filter and prepends with "http://"
		url = url.slice(proxyUrl.length);
		redirectUrl = "http://" + url; // what about https, though?
	}

	// redirects to the modified url
	chrome.tabs.update(tab.id, {url: redirectUrl});
}

chrome.browserAction.onClicked.addListener(redirect);
