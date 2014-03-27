// Sample from Google's documentation

// saves options to localStorage
function save_options() {
	var server = document.getElementById("server");
	var proxy = server.value;
	var statusMessage = "Options Saved";

	// check if proxy is a valid url.
	if(proxy.indexOf("http://") == -1 && proxy.indexOf("https://") == -1) {
		statusMessage = "Warning: Incorrectly formatted url. Attempting " +
		"to fix, but checking the url you just entered is a good idea.";
		server.value = "https://" + server.value;
		proxy = server.value;
	}

	localStorage["proxy_server"] = proxy;

	// Update status to let user know options were saved.
	var status = document.getElementById("status");
	status.innerHTML = statusMessage;
	setTimeout(function() {
		status.innerHTML = "";
	}, 3000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
	var proxy = localStorage["proxy_server"];
	var server = document.getElementById("server");

	if (!proxy) { // if no selected proxy, use a default.
		// there should be a way to automatically link this as a default
		// value, shouldn't there? as it is, the default is also hard coded
		// into mainEvent.js
		server.value = "http://educationmode.appspot.com/";
	}
	else
	{
		server.value = proxy;
	}
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
