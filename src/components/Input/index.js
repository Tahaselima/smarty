

import React from 'react'
import SelectBox from './styled'

export default function SelectBox({...props}) {
    return (
        <Input
            {...props}
            theme={themes[theme]}
        />
    );
}