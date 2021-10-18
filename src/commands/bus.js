export default {
    connection: null,
    init() {
        this.bson = require('bson');
        console.warn('Initialize Bus System...');
        console.warn("Starting connection to WebSocket Server...");
        this.connection = new WebSocket("ws://192.168.1.204:3000/")
        this.connection.binaryType = "arraybuffer";

        this.connection.onmessage = (event) => {
            console.log('------> GOT EVENT');
            console.log(this.bson.deserialize(event.data));
        }

        this.connection.onopen = function(event) {
            console.warn("Successfully connected to the echo WebSocket Server...")
        }
    },
    navigate(route) {
        let command = this.bson.serialize({
            cmd: 'navigate',
            content: route
        });
        this.connection.send(command)
    },
    sendLayerCommand(cmd) {
        console.log('send layer command', cmd);
        let command = this.bson.serialize(cmd);
        this.connection.send(command)
    }
}