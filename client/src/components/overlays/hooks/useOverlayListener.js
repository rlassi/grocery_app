import { useEffect } from 'react';

export default (ref, show, close) => {
    useEffect(() => {
        const searchIcon = document.getElementById('search-icon')
        const handler = (e) => {
            if(!ref.current.contains(e.target) && !e.target.contains(searchIcon) && show) {
                close();
            }
        }
        window.addEventListener('click', handler)
        return () => {
            window.removeEventListener('click', handler)
        }
    }, [ref, show, close]);
}