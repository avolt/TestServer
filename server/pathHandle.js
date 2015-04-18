/**
 * Created by seosang-won on 15. 4. 19..
 */
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

exports.handle = handle;