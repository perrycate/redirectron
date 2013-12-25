function sayHello()
{
	alert("YAY!");
}

chrome.webNavigation.onDOMContentLoaded.addListener(sayHello);
