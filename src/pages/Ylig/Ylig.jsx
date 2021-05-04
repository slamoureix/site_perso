import React, {useState} from 'react'
import useCreateNavigation from '../../useCreateNavigation';

// datas 
import YLIG_data from '../../assets/YLIG/data.js';

import CreateImageGrid from '../../CreateImageGrid';
import { useSelector } from 'react-redux';




export default function Ylig() {
    const rep = YLIG_data.img.rep;
    const [DatasImgState] = useState(YLIG_data.img.content);

    const ObjProjects = useSelector(state => ({
        ...state.RoutesReducer.Projects
    }));

    return (
        <article className="JHV__project_container">
            <section className="JHV__presentation">
                <div className="JHV__title"><h1>{YLIG_data.name}</h1></div>
                <div className="JHV__year"><p>{YLIG_data.year}</p></div>
                <div className="JHV__type"><p><strong>{YLIG_data.type}</strong></p></div>
                <div className="JHV__content">
                <p>{YLIG_data.content}</p></div>
            </section>
            <section className="JHV__grid">{CreateImageGrid(DatasImgState, rep)}</section>
            <nav className = "JHV__navigation">{useCreateNavigation(rep, ObjProjects)}</nav>  
        </article>
    )
}
