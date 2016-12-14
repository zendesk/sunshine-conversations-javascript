export default function smoochMethod({params, func}) {
    return function() {
        let args;
        const implicitAppId = params.includes('appId') && !this.requireAppId;
        const expectedParams = implicitAppId ? params.filter((p) => p !== 'appId') : params;

        if (typeof arguments[0] === 'object' && arguments.length === 1) {
            const paramObject = arguments[0];
            if (params.includes('props') &&
                typeof paramObject.props !== 'object') {
                // func accepts a single object arg called props
                // and it's not wrapped inside any outer object
                args = [paramObject];
            } else {
                // Map the object params into an array of args
                args = expectedParams.map((param) => {
                    if (!paramObject[param]) {
                        throw new Error(`${func.name}: missing required argument: ${param}`);
                    }
                    return paramObject[param];
                });
            }
        } else {
            args = [].slice.call(arguments);
        }

        if (args.length !== expectedParams.length) {
            throw new Error(`${func.name}: incorrect number of parameters (${args.length}). Expected ${expectedParams.length}`);
        }

        // appId param is used by func, but in this case its not required, so pad the arg list
        if (implicitAppId) {
            args.unshift(undefined);
        }

        return func.apply(this, args);
    };
}
