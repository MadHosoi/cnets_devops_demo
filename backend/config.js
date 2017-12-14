
/// cf create-user-provided-service cnets-chat-demo-mongodb -p '{ "uri": "mongodb://<user>:<pass>@<host>:<port>/<db>" }'
module.exports.getMongoUrl = function getMongoUrl()
{
  var cfenv = require('cfenv');
  if (cfenv != undefined){
    var appenv = cfenv.getAppEnv();
  
    // Within the application environment (appenv) there's a services object
    var services = appenv.services;
    var mongoService = services["cnets-chat-demo-mongodb"];

    if (mongoService != undefined)
    {
      return mongoService.uri;
    }
  }
}

module.exports = {
  serverPort: process.env.PORT || 3000,
  mongodb: { url: "mongodb://185.170.26.160:8087/cnets_chat" },
  k5: { storageEndpoint: "", account: "", token: "" }
};
