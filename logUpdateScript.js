if (window.location.pathname === "/slogs") {
	
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if (request.action === "gameLog") {
				console.log("log received");
				document.getElementById("dbstatus").innerHTML = response;
			}
		}
	);
}
