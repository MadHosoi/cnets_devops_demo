
/// cf create-user-provided-service cnets-chat-demo-mongodb -p '{ "uri": "mongodb://<user>:<pass>@<host>:<port>/<db>" }'
function getMongoURI()
{
  var cfenv = require('cfenv');
  if (cfenv != undefined){
    var appenv = cfenv.getAppEnv();
  
    // Within the application environment (appenv) there's a services object
    var services = appenv.services;
    console.log(JSON.stringify(services));
    
    var mongoService = services["cnets-chat-demo-mongodb"];

    if (mongoService != undefined)
    {
      console.log(JSON.stringify(mongoService));
      var credentials = mongoService[0].credentials;
      return JSON.stringify(credentials);
    }
    else return "service cnets-chat-demo-mongodb undefined";
  }
  else return "cfenv undefined";
};

module.exports = {
  serverPort: process.env.PORT || 3000,
  mongodb: { url: "mongodb://185.170.26.160:8087/cnets_chat" },
  k5: { storageEndpoint: "", account: "", token: "" },
  mongoURI: getMongoURI
};
