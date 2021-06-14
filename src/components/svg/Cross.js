import React from 'react'

// eslint-disable-next-line
export default ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={color} width="30px" height="30px" viewBox="0 0 512 512">
            <g>
            </g>
                <path d="M256.010 204.645l100.118-100.146 51.344 51.33-100.118 100.146-51.344-51.329z" fill={color}/>
                <path d="M155.827 407.483l-51.344-51.358 100.161-100.132 51.344 51.358-100.161 100.132z" fill={color}/>
                <path d="M407.498 356.112l-51.373 51.358-100.118-100.146 51.373-51.358 100.118 100.146z" fill={color}/>
                <path d="M104.502 155.857l51.337-51.351 100.153 100.125-51.337 51.351-100.153-100.125z" fill={color}/>
                <path d="M255.983 307.36l-51.351-51.365 51.365-51.351 51.351 51.365-51.365 51.351z" fill={color}/>
        </svg>
    )
}



