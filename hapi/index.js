'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
const port = +process.argv[2] || 3000;
server.connection({ port: port, host: 'localhost' });
process.title = 'total: hapi.js'

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hapi.js running on total.js SuperAdmin platform');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start(function(err){

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});