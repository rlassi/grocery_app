import { css } from 'styled-components';

const calculateWidth = (numCols) => {
    return `${Math.floor(100 / numCols)}%`
}

export const breakpoints = (theme, numCols, name) => {
    const width = numCols === 'auto' ? 'auto' : calculateWidth(numCols);
    const size = theme.breakpoints.find(bp => bp.name === name);
    return css`
        @media only screen and (min-width: ${size.minWidth}) {
            & > * {
                flex: 0 0 ${width};
            }
        }
    `
}

export const shiftColor = (col, amt) => {

    var usePound = false;
    
    if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
    }
    
    var num = parseInt(col,16);
    
    var r = (num >> 16) + amt;
    
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    
    var b = ((num >> 8) & 0x00FF) + amt;
    
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    
    var g = (num & 0x0000FF) + amt;
    
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    
    [r, g, b] = [r,g,b].map(color => color <= 15 ? `0${color.toString(16)}` : color.toString(16));
    
    
    return (usePound?"#":"") + r + b + g;
}

