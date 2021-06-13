import React, {useContext} from 'react'
import {Button} from './styled'
import {ThemeContext, themes} from '../../contexts/ThemeContext'

// eslint-disable-next-line
export default ({children, ...props}) => {
    const {theme} = useContext(ThemeContext)

    return (
    <Button {...props} {...themes[theme]}>
        {children}
    </Button>
    )
}