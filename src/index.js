// these are global as they're in the top-level scope
let evt, ctx;

const event = () => {
    return evt;
}

const context = () => {
    return ctx;
}

const invocationMiddleware = (opts = {}) => {
    const invocationMiddlewareBefore = async (request) => {
        evt = request.event;
        ctx = request.context;
    }

    const invocationMiddlewareAfter = async (request) => {
        evt = null;
        ctx = null;
    }

    const invocationMiddlewareOnError = async (request) => {
        evt = null;
        ctx = null;
    }

    return {
        before: invocationMiddlewareBefore,
        after: invocationMiddlewareAfter,
        onError: invocationMiddlewareOnError,
    }
}

module.exports = invocationMiddleware
module.exports.mw = invocationMiddleware
module.exports.event = event
module.exports.context = context
