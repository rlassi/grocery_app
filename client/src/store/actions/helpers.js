export const client = (endpoint, method = 'GET', body, auth) => {
    const token = localStorage.token;
    const authConfig = auth ? { 'Authorization': `Bearer ${token}` } : {};
    const bodyConfig = body ? { body: JSON.stringify(body) } : {};
    const config = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...authConfig
        },
        ...bodyConfig
    }

    return fetch(endpoint, config)
}