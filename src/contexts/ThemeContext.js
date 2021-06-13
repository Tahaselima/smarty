
import React from "react"

export const themes = {
    dark: {
        primary: '#232323',
        second: '#191919',
        primaryText: '#ffdf00',
        secondText: '#fff7c3',
        white: '#FFF',
        fontSizeXs: '1rem',
        fontSizeSm: '1.2rem',
        fontSize: '1.4rem',
        fontSizeLg: '1.6rem',
        fontSizeXl: '2.2rem',
        fontSizeXxl: '2.4em',
    },
    light: {
        primary: '#FFF',
        second: '#dcdcdc',
        primaryText: '#122139',
        secondText: '#0f1c2f',
        white: '#FFF',
        fontSizeXs: '1rem',
        fontSizeSm: '1.2rem',
        fontSize: '1.4rem',
        fontSizeLg: '1.6rem',
        fontSizeXl: '2.2rem',
        fontSizeXxl: '2.4em',
    }
};
export const ThemeContext = React.createContext()
