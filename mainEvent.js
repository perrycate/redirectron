function redirect(tab)
{
	var url = tab.url;
	var redirectUrl = ""; 
	var proxyUrl = localStorage["proxy_server"]; 

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
		   Note: adding the "http://" back is necessary to make the url readable by
		 the browser. It was taken out in the first place to make the url readable 
		 to the proxy server. 
		 */
	}

	// redirects to the modified url
	chrome.tabs.update(tab.id, {url: redirectUrl});
}

function isBlocked(tab) // to run redirect function when key pressed
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		redirect(tabs[0]);
	});
}

chrome.browserAction.onClicked.addListener(redirect);
chrome.commands.onCommand.addListener(isBlocked);
