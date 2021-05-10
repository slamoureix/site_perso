import React, {useState} from 'react'

// datas 
import {
    developpementData as nameProject
} from './data.js';

import Nav from '../../components/Navigation/Navigation';

import { useSelector } from 'react-redux';
import { useLinksCreate } from '../../uselinksCreate.jsx';


export default function Developement() {

    const DeveloppementRoutes = useSelector(({
        AllRoutesReducer
    }) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));

    const ProjectsRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.RoutesReducer.Projects
    }));

    return (
        <article className= {`${nameProject.rep}__project_container`}>
            <section className= {`${nameProject.rep}__presentation`}>
                <div className= {`${nameProject.rep}__title`}><h1>{nameProject.name}</h1></div>
                <div className={`${nameProject.rep}__type`}><p><strong>{nameProject.type}</strong></p></div>
            </section>
            <nav>
                <ul className= {`${nameProject.rep}__links_container`}>{useLinksCreate(DeveloppementRoutes)}</ul>
            </nav>
            <Nav rep = {nameProject.rep} routes = {ProjectsRoutes}/>
        </article>
    )
}
