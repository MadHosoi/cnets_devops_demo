var Prometheus = require("prometheus-client")

client = new Prometheus();

module.exports = {
    connections: client.newCounter({
        namespace: "blocks_wizbit",
        name: "new_connections",
        help: "The number of new connections."
    }),

    messages: client.newCounter({
        namespace: "blocks_wizbit",
        name: "send_ws_messages",
        help: "The number of send websocket messages."
    }),

    connectedUsers: client.newGauge({
        namespace: "blocks_wizbit",
        name: "active_connections",
        help: "The number of active connections."
    }),

    memoryUsage: client.newGauge({
        namespace: "blocks_wizbit",
        name: "memory",
        help: "The currently used memory."
    })
}

client.listen(9095);
