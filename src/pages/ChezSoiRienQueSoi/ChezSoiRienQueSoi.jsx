import React, {useState} from 'react';

import useCreateNavigation from '../../useCreateNavigation';

// datas 
import { default as nameProject } from '../../assets/CSRQS/data.js';

import CreateImageGrid from '../../CreateImageGrid';
import { useSelector } from 'react-redux';

export default function ChezSoiRienQueSoi() {
    const rep = nameProject.img.rep;
    const [DatasImgState] = useState(nameProject.img.content);
    const ObjProjects = useSelector(state => ({
        ...state.RoutesReducer.Projects
    }));

    return (
        <article className = "CSRQS__project_container" >
            <section className="CSRQS__presentation">
                <div className="CSRQS__title"><h1>{nameProject.name}</h1></div>
                <div className="CSRQS__year"><p>{nameProject.year}</p></div>
                <div className="CSRQS__type"><p><strong>{nameProject.type}</strong></p></div>
                <div className="CSRQS__content">
                <p>{nameProject.content}</p></div>
            </section>
            <section className="CSRQS__grid">{CreateImageGrid(DatasImgState, rep)}</section>
            <nav className = "CSRQS__navigation">{useCreateNavigation(rep, ObjProjects)}</nav>  
        </article>
    )
}
