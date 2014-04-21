// set the default proxy to use
proxyUrl = "https://educationmode.appspot.com/";
localStorage["proxy_server"] = proxyUrl

function redirect(tab)
{
	var url = tab.url;
	var redirectUrl = ""; 

	// ensure that proxyUrl is what the user has set in options.
	proxyUrl = localStorage["proxy_server"]; 
	
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

// run redirect function when key pressed
function keyPressed(command) 
{
	if(command === "redirect-on-key") {
		// calls redirect function on the active tab
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			redirect(tabs[0]);
		});
	}
}

// save title of page into storage to identify future blocks automatically
function identifyBlocker(command)
{
	if(command === "identify-blocker") {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var title = tabs[0].title;
			localStorage["blocker_title"] = title;
			alert(localStorage["blocker_title"] + " was set");
		});
	}
}

	
function checkIfBlocked(details)
{
	/* WARNING:
	   there could be an infinite loop here if the proxy is blocked. If the proxy
	   is blocked, then it could continue to try to call redirect over and over,
	   regardless of the fact that the proxy is getting blocked. Add a check for this.

	   EDIT: I think I fixed this, but am leaving this warning in until I'm sure I've 
	   tested this.
	*/

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		/*
		alert("URL: " + tabs[0].url);
		alert("proxyUrl: " + proxyUrl);
		alert("Proxy not in use: " + (tabs[0].url.indexOf(proxyUrl) == -1));
		alert("Title Blocked: " + (tabs[0].title === localStorage["blocker_title"]));
		*/
		// if tab title matches title of block screen and proxy not in use
		if((tabs[0].title === localStorage["blocker_title"]) && (tabs[0].url.indexOf(proxyUrl) == -1)) {
		//	alert("redirecting");
			redirect(tabs[0]);
		}

	});

}

chrome.browserAction.onClicked.addListener(redirect);
chrome.commands.onCommand.addListener(keyPressed);
chrome.commands.onCommand.addListener(identifyBlocker);
chrome.webRequest.onCompleted.addListener(checkIfBlocked, {urls: ["<all_urls>"] }); 
