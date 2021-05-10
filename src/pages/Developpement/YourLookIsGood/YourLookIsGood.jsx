import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Nav from '../../../components/Navigation/Navigation';
import CreateImageGrid from '../../../scripts/CreateImageGrid';

import Preview from '../../../components/Preview/Preview';

// datas 
import {yourLookIsGoodData as nameProject } from './data.js';


export default function YourLookIsGood() {
    const [DatasImgState] = useState(nameProject.img.content);

    const ProjectsRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.RoutesReducer.Projects
    }));

    const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));

    return (
        <article className= {`${nameProject.rep}__project_container`}>
            <section className= {`${nameProject.rep}__presentation`}>
                <div className= {`${nameProject.rep}__title`}><h1>{nameProject.name}</h1></div>
                <div className= {`${nameProject.rep}__year`}><p>{nameProject.year}</p></div>

                <div className = {`${nameProject.name}__preview`} > 
                    <Preview 
                        path = {ProjectsRoutes.Developpement.path}
                        typeName = {nameProject.type}/>
                </div>
                
                <div className = {`${nameProject.rep}__content`}>
                <p>{nameProject.content}</p>
                <br/>
                <p>{nameProject.techno}</p>
                
                </div>
            </section>
            <section className={`${nameProject.rep}__grid`}>{CreateImageGrid(DatasImgState, nameProject.rep)}</section>
            <Nav rep= {nameProject.rep} routes= {DeveloppementRoutes}/>
        </article>
    )
}