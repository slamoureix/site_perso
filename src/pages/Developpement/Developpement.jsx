import React, {useState} from 'react'

// datas 
import {default as nameProject} from './data.js';

import CreateImageGrid from '../../scripts/CreateImageGrid';
import Nav from '../../components/Navigation/Navigation';

import { useSelector } from 'react-redux';


export default function Developement() {
    const [DatasImgState] = useState(nameProject.img.content);

    const ProjectsRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.RoutesReducer.Projects
    }));

    return (
        <article className= {`${nameProject.rep}__project_container`}>
            <section className= {`${nameProject.rep}__presentation`}>
                <div className= {`${nameProject.rep}__title`}><h1>{nameProject.name}</h1></div>
                <div className= {`${nameProject.rep}__year`}><p>{nameProject.year}</p></div>
                <div className={`${nameProject.rep}__type`}><p><strong>{nameProject.type}</strong></p></div>
                <div className = {`${nameProject.rep}__content`}>
                <p>{nameProject.content}</p></div>
            </section>
            <section className={`${nameProject.rep}__grid`}>{CreateImageGrid(DatasImgState, nameProject.rep)}</section>
            <Nav rep = {nameProject.rep} routes = {ProjectsRoutes}/>
        </article>
    )
}
