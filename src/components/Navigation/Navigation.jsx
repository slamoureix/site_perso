import React, { useEffect, useState } from 'react';

import Arrow from '../Navigation/Arrow';

export default function Navigation(props) {

    const [navState, setNavState] = useState({
            last: '', 
            next: ''
        });

    useEffect(() => {
        for (let index = 0; index < Object.values(props.routes).length; index++) {
            const element = Object.values(props.routes)[index];
            if (props.rep === element.rep) {

                const last = (index, ObjProjects) => {
                    if (index === 0) {
                        let path = Object.values(ObjProjects)[Object.values(ObjProjects).length - 1].path;
                        return path;
                    } else {
                        return Object.values(ObjProjects)[index - 1].path
                    }
                }
                const next = (index, ObjProjects) => {
                    
                    if (index === Object.values(ObjProjects).length - 1) {
                        return Object.values(ObjProjects)[0].path
                    } else {
                        return Object.values(ObjProjects)[index + 1].path
                    }
                }

                setNavState(() => {
                    return {
                        ...navState,
                        last: last(index, props.routes),
                        next: next(index, props.routes)
                    }
                })
            }
        }
    }, [])

    return (
        <nav className={`${props.rep}__navigation`}>
            <button className="last">
                    <Arrow to={navState.last}/>
            </button>
            <button className="next">
                    <Arrow to={navState.next}/>
            </button>
        </nav> 
    )
}
