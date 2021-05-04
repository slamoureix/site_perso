import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export default function useCreateNavigation(rep, ObjProjects) {

    const [navState, setNavState] = useState({
            last: '', 
            next: ''
        });

    useEffect(() => {
        console.log(ObjProjects);
        for (let index = 0; index < Object.values(ObjProjects).length; index++) {
            const element = Object.values(ObjProjects)[index];
            console.log(element.rep)
            console.log(rep)
            if (rep === element.rep) {

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
                        last: last(index, ObjProjects),
                        next: next(index, ObjProjects)
                    }
                })
            }
        }
    }, [])

    const ArrButtons = [];

    const last = <button className="last">
                    <Link to = {navState.last}>
                    <svg viewBox="0 0 49.72 99.45"><path d="M2.64,2.78,52.36,52.5,2.64,102.22ZM41.05,52.5,10.64,22.08V82.92Z" transform="translate(-2.64 -2.78)"/></svg>
                    </Link>
                </button>
    const next =
                <button className="next">
                    <Link to={navState.next}>
                    <svg viewBox="0 0 49.72 99.45"><path d="M2.64,2.78,52.36,52.5,2.64,102.22ZM41.05,52.5,10.64,22.08V82.92Z" transform="translate(-2.64 -2.78)"/></svg>
                    </Link>
                </button>

    ArrButtons.push(last, next);

    return ArrButtons;
}
