import React, {useState} from 'react';

import useCreateNavigation from '../../useCreateNavigation';

// datas 
import { default as nameProject } from '../../assets/LANDSCAPE/data.js';

import CreateImageGrid from '../../CreateImageGrid';


import './landscape.scss';
import { useSelector } from 'react-redux';

export default function Landscape() {
    const rep = nameProject.img.rep;
    const [DatasImgState] = useState(nameProject.img.content);

    const ObjProjects = useSelector(state => ({
        ...state.RoutesReducer.Projects
    }));

    return (
        <article className = "LANDSCAPE__project_container" >
            <section className="LANDSCAPE__presentation">
                <div className="LANDSCAPE__title"><h1>{nameProject.name}</h1></div>
                <div className="LANDSCAPE__year"><p>{nameProject.year}</p></div>
                <div className="LANDSCAPE__type"><p><strong>{nameProject.type}</strong></p></div>
                <div className="LANDSCAPE__content">
                <p>{nameProject.content}</p></div>
            </section>
            <section className="LANDSCAPE__grid">{CreateImageGrid(DatasImgState, rep)}</section>
            <nav className = "LANDSCAPE__navigation">{useCreateNavigation(rep, ObjProjects)}</nav>  
        </article>
    )
}
