// Sample from Google's documentation

// saves options to localStorage
function save_options() {
	var server = document.getElementById("server");
	var proxy = server.value;
	localStorage["proxy_server"] = proxy;

	// Update status to let user know options were saved.
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
	var proxy = localStorage["proxy_server"];
	var server = document.getElementById("server");

	if (!proxy) { // if no selected proxy, use a default.
		server.value = "http://tommy-b.appspot.com/";
	}
	else
	{
		server.value = proxy;
	}
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
