/**
 * Generate HTTP headers from auth credentials
 * @param  {AuthCredentials} props
 * @return {Promise}      - promise that resolves with the headers
 */
export function getAuthenticationHeaders(props) {
    if (!props) {
        throw new Error('Must provide authentication information.');
    }

    // JWT always have priority over a simple app token
    if (props.jwt) {
        return {
            'Authorization': 'Bearer ' + props.jwt
        };
    } else if (props.appToken) {
        return {
            'app-token': props.appToken
        };
    }

    throw new Error('Must provide a JWT or a app token');
}
