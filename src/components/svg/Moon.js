import React from 'react'

// eslint-disable-next-line
export default ({color, size}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
            stroke="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: "rotate(40deg)", marginLeft: '7px', marginTop: '4px' }}
            >
            <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" /> 
                <circle cx="12" cy="4" r="9" fill="black" />    
            </mask>
            <circle fill="white" cx="12" cy="12" r="9" mask="url(#mask)" />
        </svg>
    )
}



