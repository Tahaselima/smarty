import React, {useContext} from 'react'
import {Select} from './styled'
import {ThemeContext, themes} from '../../contexts/ThemeContext'

export default function SelectBox({options, onChange, labelText, selectedVariant}) {
    const {theme} = useContext(ThemeContext)
    return (
        <>
        {labelText && <p>{labelText}</p>}
        <Select onChange={(e) => onChange(e.target.value)} defaultValue={selectedVariant || ''} {...themes[theme]}>
        {
            options.map((o,index) => {
            return (<option 
                disabled={o.disabled}
                key={index}
                value={o}>
                {o}
                </option>)
            })
        } 
        </Select>
        </>
    );
}