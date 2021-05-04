import { useEffect, useState } from 'react';

import Arrow from './components/Navigation/Arrow';

export default function useCreateNavigation(rep, ObjProjects) {

    const [navState, setNavState] = useState({
            last: '', 
            next: ''
        });
        
    const ArrButtons = [];

    useEffect(() => {
        for (let index = 0; index < Object.values(ObjProjects).length; index++) {
            const element = Object.values(ObjProjects)[index];
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


    const last = <button className="last">
                    <Arrow to={navState.last}/>
                </button>
    const next =
                <button className="next">
                    <Arrow to={navState.next}/>
                </button>

    ArrButtons.push(last, next);

    return ArrButtons;
}
