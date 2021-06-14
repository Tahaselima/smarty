

import React, {useContext} from 'react'
import {Text, Label} from './styled'
import {ThemeContext, themes} from '../../contexts/ThemeContext'


export default function Input({labelText, ...props}) {
    const {theme} = useContext(ThemeContext)

    return (
        <>
            {labelText && <Label theme={themes[theme]}>{labelText}</Label>}
            <Text
                {...props}
                theme={themes[theme]}
            />
        </>
    );
}