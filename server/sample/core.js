/**
 * Created by seosang-won on 15. 4. 19..
 */

var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("online", function(worker){
       console.log(worker.process.pid + ' Start');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    server.start(router.route, handle);
}

//server.start(router.route, handle);

