import React, {useState} from 'react';

import useCreateNavigation from '../../useCreateNavigation';

// datas 
import { default as nameProject } from '../../assets/OLDIES/data.js';

import CreateImageGrid from '../../CreateImageGrid';
import { useSelector } from 'react-redux';

export default function Oldies() {
    const rep = nameProject.img.rep;
    const [DatasImgState] = useState(nameProject.img.content);
    const ObjProjects = useSelector(state => ({
        ...state.RoutesReducer.Projects
    }));

    return (
        <article className = "OLDIES__project_container" >
            <section className="OLDIES__presentation">
                <div className="OLDIES__title"><h1>{nameProject.name}</h1></div>
                <div className="OLDIES__year"><p>{nameProject.year}</p></div>
                <div className="OLDIES__type"><p><strong>{nameProject.type}</strong></p></div>
                <div className="OLDIES__content">
                <p>{nameProject.content}</p></div>
            </section>
            <section className="OLDIES__grid">{CreateImageGrid(DatasImgState, rep)}</section>
            <nav className = "OLDIES__navigation">{useCreateNavigation(rep, ObjProjects)}</nav>  
        </article>
    )
}
