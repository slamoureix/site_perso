import React from 'react'
import './_ToSite.scss'

export default function ToSite({toSite}) {
    return (
        <a className="ToSite" href={toSite} >
            <span > Découvrir </span>

            <svg viewBox="0 0 174.13 99.45">
            <path d="M176.77,74.05V3.73H106.45l23.69,23.7L79.23,78.34l22.93,22.93,50.91-50.91Zm-51-62.32h43v43l-10-10h0L135.81,21.76h0ZM102.16,90,90.55,78.34,135.8,33.08,147.42,44.7Z" 
            transform="translate(-2.64 -2.78)"/>
            </svg>
            
        </a>
    )
}