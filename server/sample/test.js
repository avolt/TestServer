/**
 * Created by seosang-won on 15. 4. 19..
 */

/*
 var http = require("http");

http.Server(function(request, response) {
    console.log("aaaaaa");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
*/

// This refactoring
var http = require("http");

function onRequest(request, response){
    console.log("Request received");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.Server(onRequest).listen(8888);

console.log("Server Start");


