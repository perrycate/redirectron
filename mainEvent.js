function redirect(tab)
{
	var url = tab.url;
	var redirectUrl = ""; 
	var proxyUrl;

	// check if a custom server has been set
	if(localStorage["proxy_server"] != null)
	{
		proxyUrl = localStorage["proxy_server"]; 
	}
	else
	{
		// if not, set the default server to use
		proxyUrl = "https://educationmode.appspot.com/";
		localStorage["proxy_server"] = proxyUrl
	}
	
	// if the proxy filter is not already in the url
	if(url.indexOf(proxyUrl) == -1) 
	{
		// Prepends the proxy to the url, removing unecessary part of url.
		redirectUrl = url.replace(/.*:\/\//, proxyUrl);
	}
	else
	{
		// removes the proxy from the url
		redirectUrl = url.replace(proxyUrl, "http://");
		/*
		   Note: adding the "http://" back is necessary to make the url 
		   readable by the browser. It was taken out in the first place to
		   make the url readable to the proxy server.
		 */
	}
	

	// redirects to the modified url
	chrome.tabs.update(tab.id, {url: redirectUrl});
}

function keyPressed(tab) // to run redirect function when key pressed
{
	// calls redirect function on the active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		redirect(tabs[0]);
	});
}

chrome.browserAction.onClicked.addListener(redirect);
chrome.commands.onCommand.addListener(keyPressed);
/*
// just testing here. broken for some reason, not sure why yet...
chrome.webRequest.onResponseStarted.addListener(function(object details) {
	alert("status code: ");
});
*/
