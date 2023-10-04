console.log("hello rewriter!");

function moveNode(child, target) {
	target.appendChild(child);
}

function fixURL(anchor) {
	var url = anchor.getAttribute("href");
	
	if (url.toLowerCase().indexOf("http") == 0) {
		return;
	}
	anchor.setAttribute(
		"href", 
		"http://localhost/week7/fetch_page.php?page=" 
			+ encodeURIComponent("http://eloquentjavascript.net/" + url)
	);
}

function fixTags(root, tagName, attribute) {
	var tags = root.getElementsByTagName(tagName);
	
	for (var counter = 0; counter < tags.length; counter++) {
		
		var url = tags[counter].getAttribute(attribute);
		
		if (url.toLowerCase().indexOf("http") != 0) {
			tags[counter].setAttribute(
				attribute, 
				"http://eloquentjavascript.net/" + url
			);
		}
	}
}

window.addEventListener("load", function() {
	var parser = new DOMParser();
	var source = parser.parseFromString(atob(PAGE), "text/html");
	
	var sourceBody = source.getElementsByTagName("body")[0];
	var targetBody = document.getElementById("results");
	var children = sourceBody.childNodes;
	
	var anchors = source.getElementsByTagName("a");
	
	for (var counter = 0; counter < anchors.length; counter++) {
		fixURL(anchors[counter]);
	}
	
	fixTags(source, "img", "src");
	
	for (var counter = 0; counter < children.length; counter++) {
		// moveNode(children[i], targetBody);
		targetBody.appendChild(children[counter]);
	}
	console.log(source);
});
