/**
 * Generate HTTP headers from auth credentials
 * @param  {AuthCredentials} props
 * @return {Promise}      - promise that resolves with the headers
 */
export function getAuthenticationHeaders(props) {
    if (!props) {
        throw new Error('Must provide authentication information.');
    }

    if (props.jwt) {
        return {
            'Authorization': 'Bearer ' + props.jwt
        };
    }

    if (props.username && props.password) {
        return {
            'Authorization': `Basic ${new Buffer(`${props.username}:${props.password}`).toString('base64')}`
        };
    }

    throw new Error('Must provide a JWT or basic auth');
}
