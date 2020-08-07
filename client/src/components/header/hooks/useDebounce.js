import { useState, useEffect } from 'react';

export default (value, delay) => {
    const [state, setState] = useState(null);
    useEffect(() => {
        const handler = setTimeout(() => {
            setState(value)
        }, delay)
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);
    return state
}