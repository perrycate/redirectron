var proxyUrl = "http://tommy-b.appspot.com/"; // maybe use a different proxy?

function redirect(tab)
{
	var url = tab.url;
	var redirectUrl = ""; 

	if(url.indexOf(proxyUrl) == -1) // if the proxy filter is not already in the url
	{
		// Prepends the proxy to the url, removing unecessary part of url. (protocol)
		redirectUrl = url.replace(/.*:\/\//, proxyUrl);
	}
	else
	{
		// removes the proxy from the url
		redirectUrl = url.replace(proxyUrl, "http://");
		/*
		   Note: adding the "https://" back is necessary to make the url readable by
		 the browser. It was taken out in the first place to make the url readable 
		 to the proxy server.
		 */
	}

	// redirects to the modified url
	chrome.tabs.update(tab.id, {url: redirectUrl});
}

chrome.browserAction.onClicked.addListener(redirect);
