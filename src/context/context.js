import React from 'react';

export const themes = {
    
        default: {
            background: 'black'
        },

        dark: {
            background: 'blue'
        },

        sunny: {
            background: 'red'
        },

        midday: {
            background: 'green'
        },

        nightfall: {
            background: 'gold'
        },

        seafoam: {
            background: 'silver'
        },

        valentine: {
            background: 'linear-gradient(to right, #00AAFF, #00FF6C)'
        }

    };


const ThemeContext = React.createClass(themes.default)

export default ThemeContext; 