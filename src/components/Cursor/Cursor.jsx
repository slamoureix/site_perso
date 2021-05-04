import React, {useEffect, useRef} from 'react';

import './_Cursor.scss';

export default function Cursor({Position}) {
    let cursorRef = useRef();
    let pageX = Position.pageX;
    let pageY = Position.pageY;

    useEffect(() => {
        cursorRef.current.setAttribute('style', `top: ${pageY - 12.5}px; left:${pageX - 12.5}px;`);
    }, [pageX, pageY])

    return (
        <div ref={cursorRef} className="cursor">
        <span></span>
        </div>
    )
}
