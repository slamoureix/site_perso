import React, {useState} from 'react';

import useCreateNavigation from '../../useCreateNavigation';

// datas 
import CYRILJOURNET_data from './data';

import CreateImageGrid from '../../scripts/CreateImageGrid';
import { useSelector } from 'react-redux';




export default function CyrilJournet() {
    const nameProject = CYRILJOURNET_data;
    const rep = nameProject.img.rep;
    const [DatasImgState] = useState(nameProject.img.content);
    const ObjProjects = useSelector(state => ({
        ...state.RoutesReducer.Projects
    }));

    return (
        <article className = "CYRILJOURNET__project_container" >
            <section className="CYRILJOURNET__presentation">
                <div className="CYRILJOURNET__title"><h1>{nameProject.name}</h1></div>
                <div className="CYRILJOURNET__year"><p>{nameProject.year}</p></div>
                <div className="CYRILJOURNET__type"><p><strong>{nameProject.type}</strong></p></div>
                <div className="CYRILJOURNET__content">
                <p>{nameProject.content}</p></div>
            </section>
            <section className="CYRILJOURNET__grid">{CreateImageGrid(DatasImgState, rep)}</section>
            <nav className = "CYRILJOURNET__navigation">{useCreateNavigation(rep, ObjProjects)}</nav>  
        </article>
    )
}
