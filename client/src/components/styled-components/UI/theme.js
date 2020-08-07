import { shiftColor } from './helpers';

const theme = {
    colors: {
        primaryLight: shiftColor('#253145', 20),
        primaryMain: '#253145',
        primaryDark: shiftColor('#253145', -20),
        secondaryLight: shiftColor('#586667', 20),
        secondaryMain: '#586667',
        secondaryDark: shiftColor('#586667', -20),
        warningLight: shiftColor('#F44336', 20),
        warningMain: '#F44336',
        warningDark: shiftColor('#F44336', -20),
    },
    breakpoints: [{
        name: 'smUp',
        minWidth: '1px'
    }, {
        name: 'mdUp',
        minWidth: '599px'
    }, {
        name: 'lgUp',
        minWidth: '1000px'
    }],
    fontSizes: {
        sm: '12px',
        md: '15px',
        lg: '25px',
    }
}

export default theme