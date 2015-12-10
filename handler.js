module.exports = function() {
    var args = Array.prototype.slice.apply(arguments);

    if (args.length === 0) throw new Error('Must be invoked with ')

    switch (args.length) {
        case 1:
            if (typeof args[0] === 'undefined' || typeof args[0] !== 'object')
                throw new Error('Invoked with 1 ')
    }

    return function(socket, next) {
        server.inject({
            socket: socket,
            url: socket.request.info.uri, // TODO: find out what this should be
            headers: socket.request.headers
        }, res => {
            server.auth.test()
        });
    }
};