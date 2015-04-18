/**
 * Created by seosang-won on 15. 4. 19..
 */
var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has Start");
}
exports.start = start;