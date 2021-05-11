import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Arrow from '../Navigation/Arrow';

export default function Navigation(props) {
    const [navState, setNavState] = useState({
            last: '/', 
            next: '/'
        });

    useEffect(() => {
        for (let index = 0; index < Object.values(props.routes).length; index++) {
            const element = Object.values(props.routes)[index];
            if (props.rep === element.rep) {

                const last = (index, ObjProjects) => {
                    if (index === 0) {
                        let path = Object.values(ObjProjects)[Object.values(ObjProjects).length - 1];
                        
                        return path;
                    } else {
                        return Object.values(ObjProjects)[index - 1]
                    }
                }
                const next = (index, ObjProjects) => {
                    
                    if (index === Object.values(ObjProjects).length - 1) {
                        return Object.values(ObjProjects)[0]
                    } else {
                        return Object.values(ObjProjects)[index + 1]
                    }
                }

                setNavState(navState => {
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
                    {console.log('nav mise à jour')}
                    <Link className= "last" to={navState.last.path} replace>
                    <Arrow className="last" />
                    <p>{navState.last.name}</p>
                    </Link>
            
                    <Link className= "next" to={navState.next.path} replace>
                    <p>{navState.next.name}</p>
                    <Arrow className="next"/>
                    </Link>
            
        </nav> 
    )
}
