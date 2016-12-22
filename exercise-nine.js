var http = require('http');

var argX = process.argv[2],
		argY = process.argv[3],
		argZ = process.argv[4];

var args = [argX, argY, argZ];

var arrs = [];

function getRequest(url, holdingArray, callback) {

	http.get(url, function(response) {
		response.setEncoding("utf8");

		response.on("data", function(data) {
			holdingArray.push(data);
		});

		response.on("end", function() {
			callback(holdingArray);
		});

	});
}

function log(arr) {
	formattedString = "";
	for (var i = 0; i < arr.length; i++) {
		formattedString += arr[i];
	}
	console.log(formattedString);
}

for (var u = 0; u < args.length; u++) {
	getRequest(args[u], arrs[u], log);
}
