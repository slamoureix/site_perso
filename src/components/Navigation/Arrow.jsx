import React from 'react'
import { Link } from 'react-router-dom'

export default function Arrow({to}) {
    return (
        <Link to = {to} replace >
        <svg viewBox="0 0 49.72 99.45"><path d="M2.64,2.78,52.36,52.5,2.64,102.22ZM41.05,52.5,10.64,22.08V82.92Z" transform="translate(-2.64 -2.78)"/></svg>
        </Link>
    )
}
