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

    throw new Error('Must provide a JWT');
}
