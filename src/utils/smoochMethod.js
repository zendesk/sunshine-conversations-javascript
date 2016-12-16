export default function smoochMethod({params, optional=[], path, func}) {
    return function() {
        let args;
        let allParams = params;
        let renderedPath = path;
        if (this.requireAppId) {
            allParams = ['appId', ...params];
            renderedPath = `/apps/:appId${path}`;
        }

        const requiredParams = allParams.filter((p) => !optional.includes(p));

        if (typeof arguments[0] === 'object' && arguments.length === 1) {
            const paramObject = arguments[0];
            if (allParams.includes('props') &&
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
            args = [...arguments];
        }

        if (args.length < requiredParams.length) {
            throw new Error(`${func.name}: incorrect number of parameters (${args.length}). Expected at least ${requiredParams.length}`);
        }

        if (args.length > allParams.length) {
            throw new Error(`${func.name}: incorrect number of parameters (${args.length}). Expected at most ${params.length}`);
        }

        allParams.forEach((param, i) => {
            if (args[i] && renderedPath.includes(`:${param}`)) {
                renderedPath = renderedPath.replace(`:${param}`, args[i]);
            }
        });

        const url = this.serviceUrl + renderedPath;
        if (this.requireAppId) {
            args[0] = url;
        } else {
            args.unshift(url);
        }

        return func.apply(this, args);
    };
}
