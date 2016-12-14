export default function smoochMethod({params, optional=[], func}) {
    return function() {
        let args;
        const implicitAppId = params.includes('appId') && !this.requireAppId;
        const allParams = implicitAppId ? params.filter((p) => p !== 'appId') : params;
        const requiredParams = allParams.filter((p) => !optional.includes(p));

        if (typeof arguments[0] === 'object' && arguments.length === 1) {
            const paramObject = arguments[0];
            if (params.includes('props') &&
                typeof paramObject.props !== 'object') {
                // func accepts a single object arg called props
                // and it's not wrapped inside any outer object
                args = [paramObject];
            } else {
                // Map the object params into an array of args
                args = [];
                allParams.forEach((param) => {
                    const value = paramObject[param];
                    const isRequired = requiredParams.includes(param);
                    if (!value && isRequired) {
                        throw new Error(`${func.name}: missing required argument: ${param}`);
                    }

                    if (value) {
                        args.push(value);
                    }
                });
            }
        } else {
            args = [].slice.call(arguments);
        }

        if (args.length < requiredParams.length) {
            throw new Error(`${func.name}: incorrect number of parameters (${args.length}). Expected at least ${requiredParams.length}`);
        }

        if (args.length > allParams.length) {
            throw new Error(`${func.name}: incorrect number of parameters (${args.length}). Expected at most ${allParams.length}`);
        }

        // appId param is used by func, but in this case its not required, so pad the arg list
        if (implicitAppId) {
            args.unshift(undefined);
        }

        return func.apply(this, args);
    };
}
