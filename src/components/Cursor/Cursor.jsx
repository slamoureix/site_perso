import React, {useEffect, useRef} from 'react';

import './_Cursor.scss';

export default function Cursor({Position}) {
    let cursorRef = useRef();
    let pageX = Position.pageX;
    let pageY = Position.pageY;

    useEffect(() => {
        cursorRef.current.setAttribute('style', `top: ${pageY - 10}px; left:${pageX - 10}px;`);
        // regarder à nouveau la vidéo sur le cursor Ecole du web
    }, [pageX, pageY])

    return (
        <div ref={cursorRef} className="cursor">
        <span></span>
        </div>
    )
}
