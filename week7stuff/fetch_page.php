<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Page rewriter</title>
		<script>
			var PAGE = "<?php
					$url = isset($_GET['page']) ? $_GET['page'] : "http://eloquentjavascript.net/";
					
					$contents = file_get_contents($url);
	
					echo base64_encode($contents);
				?>";
		</script>
		<script src="rewriter.js"></script>
	</head>
	<body>
		<div id="results"></div>
	</body>
</html>