import React from 'react'
import './svg.scss'

export default function SvgComponent({className = '', name}) {
    return (
        <svg className={`${className} svg`}>
            <use href={`/svg/common.svg#`+ name}></use>
        </svg>
    )
}

